import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddEventSourceRequestBody extends SpeakeasyBase {
    /**
     * The largest number of records that AWS Lambda will give to your function in a single event. The default is 100 records.
     */
    batchSize?: number;
    /**
     * The Amazon Resource Name (ARN) of the Amazon Kinesis stream that is the event source. Any record added to this stream causes AWS Lambda to invoke your Lambda function. AWS Lambda POSTs the Amazon Kinesis event, containing records, to your Lambda function as JSON.
     */
    eventSource: string;
    /**
     * The Lambda function to invoke when AWS Lambda detects an event on the stream.
     */
    functionName: string;
    /**
     * A map (key-value pairs) defining the configuration for AWS Lambda to use when reading the event source. Currently, AWS Lambda supports only the <code>InitialPositionInStream</code> key. The valid values are: "TRIM_HORIZON" and "LATEST". The default value is "TRIM_HORIZON". For more information, go to <a href="http://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetShardIterator.html#Kinesis-GetShardIterator-request-ShardIteratorType">ShardIteratorType</a> in the Amazon Kinesis Service API Reference.
     */
    parameters?: Record<string, string>;
    /**
     * The ARN of the IAM role (invocation role) that AWS Lambda can assume to read from the stream and invoke the function.
     */
    role: string;
}
export declare class AddEventSourceRequest extends SpeakeasyBase {
    requestBody: AddEventSourceRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AddEventSourceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    eventSourceConfiguration?: shared.EventSourceConfiguration;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: shared.InvalidParameterValueException;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceException
     */
    serviceException?: shared.ServiceException;
}
