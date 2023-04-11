import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the authentication mode.
 */
export declare enum BackendAPIAuthTypeModeEnum {
    ApiKey = "API_KEY",
    AwsIam = "AWS_IAM",
    AmazonCognitoUserPools = "AMAZON_COGNITO_USER_POOLS",
    OpenidConnect = "OPENID_CONNECT"
}
/**
 * Describes settings for the authentication mode.
 */
export declare class BackendAPIAuthTypeSettings extends SpeakeasyBase {
    cognitoUserPoolId?: string;
    description?: string;
    expirationTime?: number;
    openIDAuthTTL?: string;
    openIDClientID?: string;
    openIDIatTTL?: string;
    openIDIssueURL?: string;
    openIDProviderName?: string;
}
/**
 * Describes the auth types for your configured data models.
 */
export declare class BackendAPIAuthType extends SpeakeasyBase {
    mode?: BackendAPIAuthTypeModeEnum;
    settings?: BackendAPIAuthTypeSettings;
}
