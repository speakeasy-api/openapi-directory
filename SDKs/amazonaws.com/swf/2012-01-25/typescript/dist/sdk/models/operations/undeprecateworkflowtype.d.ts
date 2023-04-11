import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UndeprecateWorkflowTypeXAmzTargetEnum {
    SimpleWorkflowServiceUndeprecateWorkflowType = "SimpleWorkflowService.UndeprecateWorkflowType"
}
export declare class UndeprecateWorkflowTypeRequest extends SpeakeasyBase {
    undeprecateWorkflowTypeInput: shared.UndeprecateWorkflowTypeInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UndeprecateWorkflowTypeXAmzTargetEnum;
}
export declare class UndeprecateWorkflowTypeResponse extends SpeakeasyBase {
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
