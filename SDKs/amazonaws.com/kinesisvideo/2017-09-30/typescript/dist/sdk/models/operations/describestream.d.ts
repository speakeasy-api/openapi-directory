import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeStreamRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the stream.
     */
    streamARN?: string;
    /**
     * The name of the stream.
     */
    streamName?: string;
}
export declare class DescribeStreamRequest extends SpeakeasyBase {
    requestBody: DescribeStreamRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeStreamResponse extends SpeakeasyBase {
    /**
     * ClientLimitExceededException
     */
    clientLimitExceededException?: any;
    contentType: string;
    /**
     * Success
     */
    describeStreamOutput?: shared.DescribeStreamOutput;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * NotAuthorizedException
     */
    notAuthorizedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
