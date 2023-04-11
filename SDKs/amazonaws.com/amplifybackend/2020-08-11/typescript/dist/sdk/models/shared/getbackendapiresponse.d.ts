import { SpeakeasyBase } from "../../../internal/utils";
import { BackendAPIAuthType } from "./backendapiauthtype";
/**
 * The strategy for conflict resolution.
 */
export declare enum GetBackendAPIResponseResourceConfigConflictResolutionResolutionStrategyEnum {
    OptimisticConcurrency = "OPTIMISTIC_CONCURRENCY",
    Lambda = "LAMBDA",
    Automerge = "AUTOMERGE",
    None = "NONE"
}
/**
 * The conflict resolution strategy for your data stored in the data models.
 */
export declare class GetBackendAPIResponseResourceConfigConflictResolution extends SpeakeasyBase {
    resolutionStrategy?: GetBackendAPIResponseResourceConfigConflictResolutionResolutionStrategyEnum;
}
/**
 * Describes the authentication mode.
 */
export declare enum GetBackendAPIResponseResourceConfigDefaultAuthTypeModeEnum {
    ApiKey = "API_KEY",
    AwsIam = "AWS_IAM",
    AmazonCognitoUserPools = "AMAZON_COGNITO_USER_POOLS",
    OpenidConnect = "OPENID_CONNECT"
}
/**
 * Describes settings for the authentication mode.
 */
export declare class GetBackendAPIResponseResourceConfigDefaultAuthTypeSettings extends SpeakeasyBase {
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
 * The default authentication type for interacting with the configured data models in your Amplify project.
 */
export declare class GetBackendAPIResponseResourceConfigDefaultAuthType extends SpeakeasyBase {
    mode?: GetBackendAPIResponseResourceConfigDefaultAuthTypeModeEnum;
    settings?: GetBackendAPIResponseResourceConfigDefaultAuthTypeSettings;
}
/**
 * The resource configuration for this response object.
 */
export declare class GetBackendAPIResponseResourceConfig extends SpeakeasyBase {
    additionalAuthTypes?: BackendAPIAuthType[];
    apiName?: string;
    conflictResolution?: GetBackendAPIResponseResourceConfigConflictResolution;
    defaultAuthType?: GetBackendAPIResponseResourceConfigDefaultAuthType;
    service?: string;
    transformSchema?: string;
}
/**
 * Success
 */
export declare class GetBackendAPIResponse extends SpeakeasyBase {
    appId?: string;
    backendEnvironmentName?: string;
    error?: string;
    resourceConfig?: GetBackendAPIResponseResourceConfig;
    resourceName?: string;
}
