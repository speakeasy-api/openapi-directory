import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateStreamRequestBody extends SpeakeasyBase {
    /**
     * A description of the stream.
     */
    description?: string;
    /**
     * The files to stream.
     */
    files: shared.StreamFile[];
    /**
     * An IAM role that allows the IoT service principal to access your S3 files.
     */
    roleArn: string;
    /**
     * Metadata which can be used to manage streams.
     */
    tags?: shared.Tag[];
}
export declare class CreateStreamRequest extends SpeakeasyBase {
    requestBody: CreateStreamRequestBody;
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
export declare class CreateStreamResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createStreamResponse?: shared.CreateStreamResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
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
}
