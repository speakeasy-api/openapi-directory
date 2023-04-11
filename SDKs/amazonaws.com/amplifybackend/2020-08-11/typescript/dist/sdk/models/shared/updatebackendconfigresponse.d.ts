import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the Amazon Cognito configurations for the Admin UI auth resource to log in with.
 */
export declare class UpdateBackendConfigResponseLoginAuthConfig extends SpeakeasyBase {
    awsCognitoIdentityPoolId?: string;
    awsCognitoRegion?: string;
    awsUserPoolsId?: string;
    awsUserPoolsWebClientId?: string;
}
/**
 * Success
 */
export declare class UpdateBackendConfigResponse extends SpeakeasyBase {
    appId?: string;
    backendManagerAppId?: string;
    error?: string;
    loginAuthConfig?: UpdateBackendConfigResponseLoginAuthConfig;
}
