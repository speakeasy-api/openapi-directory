import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeprecateWorkflowTypeXAmzTargetEnum {
    SimpleWorkflowServiceDeprecateWorkflowType = "SimpleWorkflowService.DeprecateWorkflowType"
}
export declare class DeprecateWorkflowTypeRequest extends SpeakeasyBase {
    deprecateWorkflowTypeInput: shared.DeprecateWorkflowTypeInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeprecateWorkflowTypeXAmzTargetEnum;
}
export declare class DeprecateWorkflowTypeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OperationNotPermittedFault
     */
    operationNotPermittedFault?: any;
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
}
