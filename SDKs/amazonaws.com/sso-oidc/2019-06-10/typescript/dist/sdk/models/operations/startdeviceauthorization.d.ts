import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StartDeviceAuthorizationRequestBody extends SpeakeasyBase {
    /**
     * The unique identifier string for the client that is registered with IAM Identity Center. This value should come from the persisted result of the <a>RegisterClient</a> API operation.
     */
    clientId: string;
    /**
     * A secret string that is generated for the client. This value should come from the persisted result of the <a>RegisterClient</a> API operation.
     */
    clientSecret: string;
    /**
     * The URL for the AWS access portal. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/using-the-portal.html">Using the AWS access portal</a> in the <i>IAM Identity Center User Guide</i>.
     */
    startUrl: string;
}
export declare class StartDeviceAuthorizationRequest extends SpeakeasyBase {
    requestBody: StartDeviceAuthorizationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartDeviceAuthorizationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidClientException
     */
    invalidClientException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * SlowDownException
     */
    slowDownException?: any;
    /**
     * Success
     */
    startDeviceAuthorizationResponse?: shared.StartDeviceAuthorizationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedClientException
     */
    unauthorizedClientException?: any;
}
