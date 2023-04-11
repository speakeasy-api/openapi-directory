import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListEventSourcesRequest extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the Amazon Kinesis stream.
     */
    eventSource?: string;
    /**
     * The name of the AWS Lambda function.
     */
    functionName?: string;
    /**
     * Optional string. An opaque pagination token returned from a previous <code>ListEventSources</code> operation. If present, specifies to continue the list from where the returning call left off.
     */
    marker?: string;
    /**
     * Optional integer. Specifies the maximum number of event sources to return in response. This value must be greater than 0.
     */
    maxItems?: number;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListEventSourcesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: shared.InvalidParameterValueException;
    /**
     * Success
     */
    listEventSourcesResponse?: shared.ListEventSourcesResponse;
    /**
     * ServiceException
     */
    serviceException?: shared.ServiceException;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: shared.ResourceNotFoundException;
}
