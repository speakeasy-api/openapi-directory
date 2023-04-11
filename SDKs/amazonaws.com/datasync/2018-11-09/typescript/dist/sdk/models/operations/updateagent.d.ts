import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateAgentXAmzTargetEnum {
    FmrsServiceUpdateAgent = "FmrsService.UpdateAgent"
}
export declare class UpdateAgentRequest extends SpeakeasyBase {
    updateAgentRequest: shared.UpdateAgentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateAgentXAmzTargetEnum;
}
export declare class UpdateAgentResponse extends SpeakeasyBase {
    contentType: string;
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
    /**
     * Success
     */
    updateAgentResponse?: Record<string, any>;
}
