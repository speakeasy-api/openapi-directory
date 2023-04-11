import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The request object for this operation.
 */
export declare class UpdateBackendConfigRequestBodyLoginAuthConfig extends SpeakeasyBase {
    awsCognitoIdentityPoolId?: string;
    awsCognitoRegion?: string;
    awsUserPoolsId?: string;
    awsUserPoolsWebClientId?: string;
}
export declare class UpdateBackendConfigRequestBody extends SpeakeasyBase {
    /**
     * The request object for this operation.
     */
    loginAuthConfig?: UpdateBackendConfigRequestBodyLoginAuthConfig;
}
export declare class UpdateBackendConfigRequest extends SpeakeasyBase {
    requestBody: UpdateBackendConfigRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The app ID.
     */
    appId: string;
}
export declare class UpdateBackendConfigResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * GatewayTimeoutException
     */
    gatewayTimeoutException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * Success
     */
    updateBackendConfigResponse?: shared.UpdateBackendConfigResponse;
}
