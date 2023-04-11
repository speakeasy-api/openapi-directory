import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateResourceDefinitionVersionRequestBody extends SpeakeasyBase {
    /**
     * A list of resources.
     */
    resources?: shared.Resource[];
}
export declare class CreateResourceDefinitionVersionRequest extends SpeakeasyBase {
    requestBody: CreateResourceDefinitionVersionRequestBody;
    /**
     * The ID of the resource definition.
     */
    resourceDefinitionId: string;
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
export declare class CreateResourceDefinitionVersionResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    createResourceDefinitionVersionResponse?: shared.CreateResourceDefinitionVersionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
