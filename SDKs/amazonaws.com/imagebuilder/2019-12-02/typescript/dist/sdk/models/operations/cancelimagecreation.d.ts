import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CancelImageCreationRequestBody extends SpeakeasyBase {
    /**
     * Unique, case-sensitive identifier you provide to ensure idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a> in the <i>Amazon EC2 API Reference</i>.
     */
    clientToken: string;
    /**
     * The Amazon Resource Name (ARN) of the image whose creation you want to cancel.
     */
    imageBuildVersionArn: string;
}
export declare class CancelImageCreationRequest extends SpeakeasyBase {
    requestBody: CancelImageCreationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CancelImageCreationResponse extends SpeakeasyBase {
    /**
     * CallRateLimitExceededException
     */
    callRateLimitExceededException?: any;
    /**
     * Success
     */
    cancelImageCreationResponse?: shared.CancelImageCreationResponse;
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
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
}
