import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApplicationRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the application registry.
     */
    appRegistryArn?: string;
    /**
     * The Amazon Resource Name (ARN) of the application.
     */
    applicationArn?: string;
    /**
     * The ID of the application.
     */
    applicationId?: string;
}
export declare class GetApplicationRequest extends SpeakeasyBase {
    requestBody: GetApplicationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetApplicationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getApplicationOutput?: shared.GetApplicationOutput;
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
