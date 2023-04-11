import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateStreamRequestBody extends SpeakeasyBase {
    /**
     * The description of the stream.
     */
    description?: string;
    /**
     * The files associated with the stream.
     */
    files?: shared.StreamFile[];
    /**
     * An IAM role that allows the IoT service principal assumes to access your S3 files.
     */
    roleArn?: string;
}
export declare class UpdateStreamRequest extends SpeakeasyBase {
    requestBody: UpdateStreamRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The stream ID.
     */
    streamId: string;
}
export declare class UpdateStreamResponse extends SpeakeasyBase {
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
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
    /**
     * Success
     */
    updateStreamResponse?: shared.UpdateStreamResponse;
}
