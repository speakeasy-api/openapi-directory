import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RegisterWorkflowTypeXAmzTargetEnum {
    SimpleWorkflowServiceRegisterWorkflowType = "SimpleWorkflowService.RegisterWorkflowType"
}
export declare class RegisterWorkflowTypeRequest extends SpeakeasyBase {
    registerWorkflowTypeInput: shared.RegisterWorkflowTypeInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterWorkflowTypeXAmzTargetEnum;
}
export declare class RegisterWorkflowTypeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * LimitExceededFault
     */
    limitExceededFault?: any;
    /**
     * OperationNotPermittedFault
     */
    operationNotPermittedFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TypeAlreadyExistsFault
     */
    typeAlreadyExistsFault?: any;
    /**
     * UnknownResourceFault
     */
    unknownResourceFault?: any;
}
