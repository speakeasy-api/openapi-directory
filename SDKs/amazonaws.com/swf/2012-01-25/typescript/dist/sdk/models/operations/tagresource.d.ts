import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum TagResourceXAmzTargetEnum {
    SimpleWorkflowServiceTagResource = "SimpleWorkflowService.TagResource"
}
export declare class TagResourceRequest extends SpeakeasyBase {
    tagResourceInput: shared.TagResourceInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TagResourceXAmzTargetEnum;
}
export declare class TagResourceResponse extends SpeakeasyBase {
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
     * TooManyTagsFault
     */
    tooManyTagsFault?: any;
    /**
     * UnknownResourceFault
     */
    unknownResourceFault?: any;
}
