import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartWorkflowExecutionXAmzTargetEnum {
    SimpleWorkflowServiceStartWorkflowExecution = "SimpleWorkflowService.StartWorkflowExecution"
}
export declare class StartWorkflowExecutionRequest extends SpeakeasyBase {
    startWorkflowExecutionInput: shared.StartWorkflowExecutionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartWorkflowExecutionXAmzTargetEnum;
}
export declare class StartWorkflowExecutionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DefaultUndefinedFault
     */
    defaultUndefinedFault?: any;
    /**
     * LimitExceededFault
     */
    limitExceededFault?: any;
    /**
     * OperationNotPermittedFault
     */
    operationNotPermittedFault?: any;
    /**
     * Success
     */
    run?: shared.Run;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TypeDeprecatedFault
     */
    typeDeprecatedFault?: any;
    /**
     * UnknownResourceFault
     */
    unknownResourceFault?: any;
    /**
     * WorkflowExecutionAlreadyStartedFault
     */
    workflowExecutionAlreadyStartedFault?: any;
}
