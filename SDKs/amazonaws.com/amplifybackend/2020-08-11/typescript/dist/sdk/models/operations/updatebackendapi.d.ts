import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateBackendApiPathParams extends SpeakeasyBase {
    appId: string;
    backendEnvironmentName: string;
}
export declare class UpdateBackendApiHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * The conflict resolution strategy for your data stored in the data models.
**/
export declare class UpdateBackendApiRequestBodyResourceConfigConflictResolution extends SpeakeasyBase {
    resolutionStrategy?: Record<string, any>;
}
/**
 * Describes settings for the authentication mode.
**/
export declare class UpdateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings extends SpeakeasyBase {
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
export declare class UpdateBackendApiRequestBodyResourceConfigDefaultAuthType extends SpeakeasyBase {
    mode?: Record<string, any>;
    settings?: UpdateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings;
}
/**
 * The resource config for the data model, configured as a part of the Amplify project.
**/
export declare class UpdateBackendApiRequestBodyResourceConfig extends SpeakeasyBase {
    additionalAuthTypes?: Record<string, any>;
    apiName?: Record<string, any>;
    conflictResolution?: UpdateBackendApiRequestBodyResourceConfigConflictResolution;
    defaultAuthType?: UpdateBackendApiRequestBodyResourceConfigDefaultAuthType;
    service?: Record<string, any>;
    transformSchema?: Record<string, any>;
}
export declare class UpdateBackendApiRequestBody extends SpeakeasyBase {
    resourceConfig?: UpdateBackendApiRequestBodyResourceConfig;
    resourceName: string;
}
export declare class UpdateBackendApiRequest extends SpeakeasyBase {
    pathParams: UpdateBackendApiPathParams;
    headers: UpdateBackendApiHeaders;
    request: UpdateBackendApiRequestBody;
}
export declare class UpdateBackendApiResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    gatewayTimeoutException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateBackendAPIResponse?: shared.UpdateBackendApiResponse;
}
