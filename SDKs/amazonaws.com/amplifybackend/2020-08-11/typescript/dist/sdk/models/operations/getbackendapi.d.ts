import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBackendApiPathParams extends SpeakeasyBase {
    appId: string;
    backendEnvironmentName: string;
}
export declare class GetBackendApiHeaders extends SpeakeasyBase {
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
export declare class GetBackendApiRequestBodyResourceConfigConflictResolution extends SpeakeasyBase {
    resolutionStrategy?: Record<string, any>;
}
/**
 * Describes settings for the authentication mode.
**/
export declare class GetBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings extends SpeakeasyBase {
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
export declare class GetBackendApiRequestBodyResourceConfigDefaultAuthType extends SpeakeasyBase {
    mode?: Record<string, any>;
    settings?: GetBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings;
}
/**
 * The resource config for the data model, configured as a part of the Amplify project.
**/
export declare class GetBackendApiRequestBodyResourceConfig extends SpeakeasyBase {
    additionalAuthTypes?: Record<string, any>;
    apiName?: Record<string, any>;
    conflictResolution?: GetBackendApiRequestBodyResourceConfigConflictResolution;
    defaultAuthType?: GetBackendApiRequestBodyResourceConfigDefaultAuthType;
    service?: Record<string, any>;
    transformSchema?: Record<string, any>;
}
export declare class GetBackendApiRequestBody extends SpeakeasyBase {
    resourceConfig?: GetBackendApiRequestBodyResourceConfig;
    resourceName: string;
}
export declare class GetBackendApiRequest extends SpeakeasyBase {
    pathParams: GetBackendApiPathParams;
    headers: GetBackendApiHeaders;
    request: GetBackendApiRequestBody;
}
export declare class GetBackendApiResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    gatewayTimeoutException?: any;
    getBackendAPIResponse?: shared.GetBackendApiResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
