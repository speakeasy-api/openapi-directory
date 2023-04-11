import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateAgentXAmzTargetEnum {
    FmrsServiceCreateAgent = "FmrsService.CreateAgent"
}
export declare class CreateAgentRequest extends SpeakeasyBase {
    createAgentRequest: shared.CreateAgentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAgentXAmzTargetEnum;
}
export declare class CreateAgentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createAgentResponse?: shared.CreateAgentResponse;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
