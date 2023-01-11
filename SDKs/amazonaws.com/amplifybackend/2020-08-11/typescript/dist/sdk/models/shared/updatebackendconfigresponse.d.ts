import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the Amazon Cognito configurations for the Admin UI auth resource to log in with.
**/
export declare class UpdateBackendConfigResponseLoginAuthConfig extends SpeakeasyBase {
    awsCognitoIdentityPoolId?: Record<string, any>;
    awsCognitoRegion?: Record<string, any>;
    awsUserPoolsId?: Record<string, any>;
    awsUserPoolsWebClientId?: Record<string, any>;
}
export declare class UpdateBackendConfigResponse extends SpeakeasyBase {
    appId?: Record<string, any>;
    backendManagerAppId?: Record<string, any>;
    error?: Record<string, any>;
    loginAuthConfig?: UpdateBackendConfigResponseLoginAuthConfig;
}
