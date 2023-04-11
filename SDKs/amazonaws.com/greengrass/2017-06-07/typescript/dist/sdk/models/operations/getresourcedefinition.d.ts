import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetResourceDefinitionRequest extends SpeakeasyBase {
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
}
export declare class GetResourceDefinitionResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    getResourceDefinitionResponse?: shared.GetResourceDefinitionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
