import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListFlowExecutionMessagesXAmzTargetEnum {
    IotThingsGraphFrontEndServiceListFlowExecutionMessages = "IotThingsGraphFrontEndService.ListFlowExecutionMessages"
}
export declare class ListFlowExecutionMessagesRequest extends SpeakeasyBase {
    listFlowExecutionMessagesRequest: shared.ListFlowExecutionMessagesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListFlowExecutionMessagesXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListFlowExecutionMessagesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listFlowExecutionMessagesResponse?: shared.ListFlowExecutionMessagesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
