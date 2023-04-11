import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  Includes all of the AppRegistry settings.
 */
export declare class PutConfigurationRequestBodyConfiguration extends SpeakeasyBase {
    tagQueryConfiguration?: shared.TagQueryConfiguration;
}
export declare class PutConfigurationRequestBody extends SpeakeasyBase {
    /**
     *  Includes all of the AppRegistry settings.
     */
    configuration: PutConfigurationRequestBodyConfiguration;
}
export declare class PutConfigurationRequest extends SpeakeasyBase {
    requestBody: PutConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutConfigurationResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
