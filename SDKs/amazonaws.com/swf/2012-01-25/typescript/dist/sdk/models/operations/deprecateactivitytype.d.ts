import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeprecateActivityTypeXAmzTargetEnum {
    SimpleWorkflowServiceDeprecateActivityType = "SimpleWorkflowService.DeprecateActivityType"
}
export declare class DeprecateActivityTypeRequest extends SpeakeasyBase {
    deprecateActivityTypeInput: shared.DeprecateActivityTypeInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeprecateActivityTypeXAmzTargetEnum;
}
export declare class DeprecateActivityTypeResponse extends SpeakeasyBase {
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
