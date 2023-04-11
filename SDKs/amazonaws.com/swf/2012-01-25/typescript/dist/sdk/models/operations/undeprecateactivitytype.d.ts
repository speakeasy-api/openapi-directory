import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UndeprecateActivityTypeXAmzTargetEnum {
    SimpleWorkflowServiceUndeprecateActivityType = "SimpleWorkflowService.UndeprecateActivityType"
}
export declare class UndeprecateActivityTypeRequest extends SpeakeasyBase {
    undeprecateActivityTypeInput: shared.UndeprecateActivityTypeInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UndeprecateActivityTypeXAmzTargetEnum;
}
export declare class UndeprecateActivityTypeResponse extends SpeakeasyBase {
    contentType: string;
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
