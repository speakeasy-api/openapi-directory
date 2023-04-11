import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteAgentXAmzTargetEnum {
    FmrsServiceDeleteAgent = "FmrsService.DeleteAgent"
}
export declare class DeleteAgentRequest extends SpeakeasyBase {
    deleteAgentRequest: shared.DeleteAgentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteAgentXAmzTargetEnum;
}
export declare class DeleteAgentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteAgentResponse?: Record<string, any>;
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
