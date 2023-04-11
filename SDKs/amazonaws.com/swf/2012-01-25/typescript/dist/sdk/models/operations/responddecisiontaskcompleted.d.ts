import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RespondDecisionTaskCompletedXAmzTargetEnum {
    SimpleWorkflowServiceRespondDecisionTaskCompleted = "SimpleWorkflowService.RespondDecisionTaskCompleted"
}
export declare class RespondDecisionTaskCompletedRequest extends SpeakeasyBase {
    respondDecisionTaskCompletedInput: shared.RespondDecisionTaskCompletedInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RespondDecisionTaskCompletedXAmzTargetEnum;
}
export declare class RespondDecisionTaskCompletedResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OperationNotPermittedFault
     */
    operationNotPermittedFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnknownResourceFault
     */
    unknownResourceFault?: any;
}
