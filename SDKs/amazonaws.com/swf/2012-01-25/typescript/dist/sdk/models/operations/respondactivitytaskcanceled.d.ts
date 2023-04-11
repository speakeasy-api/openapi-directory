import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RespondActivityTaskCanceledXAmzTargetEnum {
    SimpleWorkflowServiceRespondActivityTaskCanceled = "SimpleWorkflowService.RespondActivityTaskCanceled"
}
export declare class RespondActivityTaskCanceledRequest extends SpeakeasyBase {
    respondActivityTaskCanceledInput: shared.RespondActivityTaskCanceledInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RespondActivityTaskCanceledXAmzTargetEnum;
}
export declare class RespondActivityTaskCanceledResponse extends SpeakeasyBase {
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
