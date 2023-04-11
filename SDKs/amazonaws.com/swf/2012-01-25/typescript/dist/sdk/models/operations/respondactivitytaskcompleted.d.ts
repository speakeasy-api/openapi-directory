import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RespondActivityTaskCompletedXAmzTargetEnum {
    SimpleWorkflowServiceRespondActivityTaskCompleted = "SimpleWorkflowService.RespondActivityTaskCompleted"
}
export declare class RespondActivityTaskCompletedRequest extends SpeakeasyBase {
    respondActivityTaskCompletedInput: shared.RespondActivityTaskCompletedInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RespondActivityTaskCompletedXAmzTargetEnum;
}
export declare class RespondActivityTaskCompletedResponse extends SpeakeasyBase {
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
