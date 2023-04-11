import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StartImagePipelineExecutionRequestBody extends SpeakeasyBase {
    /**
     * The idempotency token used to make this request idempotent.
     */
    clientToken: string;
    /**
     * The Amazon Resource Name (ARN) of the image pipeline that you want to manually invoke.
     */
    imagePipelineArn: string;
}
export declare class StartImagePipelineExecutionRequest extends SpeakeasyBase {
    requestBody: StartImagePipelineExecutionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartImagePipelineExecutionResponse extends SpeakeasyBase {
    /**
     * CallRateLimitExceededException
     */
    callRateLimitExceededException?: any;
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * ForbiddenException
     */
    forbiddenException?: any;
    /**
     * IdempotentParameterMismatchException
     */
    idempotentParameterMismatchException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceException
     */
    serviceException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * Success
     */
    startImagePipelineExecutionResponse?: shared.StartImagePipelineExecutionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
