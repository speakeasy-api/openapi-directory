import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RegisterActivityTypeXAmzTargetEnum {
    SimpleWorkflowServiceRegisterActivityType = "SimpleWorkflowService.RegisterActivityType"
}
export declare class RegisterActivityTypeRequest extends SpeakeasyBase {
    registerActivityTypeInput: shared.RegisterActivityTypeInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterActivityTypeXAmzTargetEnum;
}
export declare class RegisterActivityTypeResponse extends SpeakeasyBase {
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
