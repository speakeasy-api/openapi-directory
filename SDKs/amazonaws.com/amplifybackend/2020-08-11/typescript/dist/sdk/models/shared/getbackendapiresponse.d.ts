import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The conflict resolution strategy for your data stored in the data models.
**/
export declare class GetBackendApiResponseResourceConfigConflictResolution extends SpeakeasyBase {
    resolutionStrategy?: Record<string, any>;
}
/**
 * Describes settings for the authentication mode.
**/
export declare class GetBackendApiResponseResourceConfigDefaultAuthTypeSettings extends SpeakeasyBase {
    cognitoUserPoolId?: Record<string, any>;
    description?: Record<string, any>;
    expirationTime?: Record<string, any>;
    openIDAuthTTL?: Record<string, any>;
    openIDClientID?: Record<string, any>;
    openIDIatTTL?: Record<string, any>;
    openIDIssueURL?: Record<string, any>;
    openIDProviderName?: Record<string, any>;
}
/**
 * The default authentication type for interacting with the configured data models in your Amplify project.
**/
export declare class GetBackendApiResponseResourceConfigDefaultAuthType extends SpeakeasyBase {
    mode?: Record<string, any>;
    settings?: GetBackendApiResponseResourceConfigDefaultAuthTypeSettings;
}
/**
 * The resource configuration for this response object.
**/
export declare class GetBackendApiResponseResourceConfig extends SpeakeasyBase {
    additionalAuthTypes?: Record<string, any>;
    apiName?: Record<string, any>;
    conflictResolution?: GetBackendApiResponseResourceConfigConflictResolution;
    defaultAuthType?: GetBackendApiResponseResourceConfigDefaultAuthType;
    service?: Record<string, any>;
    transformSchema?: Record<string, any>;
}
export declare class GetBackendApiResponse extends SpeakeasyBase {
    appId?: Record<string, any>;
    backendEnvironmentName?: Record<string, any>;
    error?: Record<string, any>;
    resourceConfig?: GetBackendApiResponseResourceConfig;
    resourceName?: Record<string, any>;
}
