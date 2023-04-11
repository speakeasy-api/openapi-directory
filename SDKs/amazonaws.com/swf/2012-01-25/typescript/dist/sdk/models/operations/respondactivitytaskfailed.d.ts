import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RespondActivityTaskFailedXAmzTargetEnum {
    SimpleWorkflowServiceRespondActivityTaskFailed = "SimpleWorkflowService.RespondActivityTaskFailed"
}
export declare class RespondActivityTaskFailedRequest extends SpeakeasyBase {
    respondActivityTaskFailedInput: shared.RespondActivityTaskFailedInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RespondActivityTaskFailedXAmzTargetEnum;
}
export declare class RespondActivityTaskFailedResponse extends SpeakeasyBase {
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
