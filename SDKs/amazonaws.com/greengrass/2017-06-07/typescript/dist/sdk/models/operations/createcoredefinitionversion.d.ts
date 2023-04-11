import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateCoreDefinitionVersionRequestBody extends SpeakeasyBase {
    /**
     * A list of cores in the core definition version.
     */
    cores?: shared.Core[];
}
export declare class CreateCoreDefinitionVersionRequest extends SpeakeasyBase {
    /**
     * The ID of the core definition.
     */
    coreDefinitionId: string;
    requestBody: CreateCoreDefinitionVersionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * A client token used to correlate requests and responses.
     */
    xAmznClientToken?: string;
}
export declare class CreateCoreDefinitionVersionResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    createCoreDefinitionVersionResponse?: shared.CreateCoreDefinitionVersionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
