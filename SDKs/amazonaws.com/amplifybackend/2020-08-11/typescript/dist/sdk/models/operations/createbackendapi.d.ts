import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateBackendApiPathParams extends SpeakeasyBase {
    appId: string;
}
export declare class CreateBackendApiHeaders extends SpeakeasyBase {
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
export declare class CreateBackendApiRequestBodyResourceConfigConflictResolution extends SpeakeasyBase {
    resolutionStrategy?: Record<string, any>;
}
/**
 * Describes settings for the authentication mode.
**/
export declare class CreateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings extends SpeakeasyBase {
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
export declare class CreateBackendApiRequestBodyResourceConfigDefaultAuthType extends SpeakeasyBase {
    mode?: Record<string, any>;
    settings?: CreateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings;
}
/**
 * The resource config for the data model, configured as a part of the Amplify project.
**/
export declare class CreateBackendApiRequestBodyResourceConfig extends SpeakeasyBase {
    additionalAuthTypes?: Record<string, any>;
    apiName?: Record<string, any>;
    conflictResolution?: CreateBackendApiRequestBodyResourceConfigConflictResolution;
    defaultAuthType?: CreateBackendApiRequestBodyResourceConfigDefaultAuthType;
    service?: Record<string, any>;
    transformSchema?: Record<string, any>;
}
export declare class CreateBackendApiRequestBody extends SpeakeasyBase {
    backendEnvironmentName: string;
    resourceConfig: CreateBackendApiRequestBodyResourceConfig;
    resourceName: string;
}
export declare class CreateBackendApiRequest extends SpeakeasyBase {
    pathParams: CreateBackendApiPathParams;
    headers: CreateBackendApiHeaders;
    request: CreateBackendApiRequestBody;
}
export declare class CreateBackendApiResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    createBackendAPIResponse?: shared.CreateBackendApiResponse;
    gatewayTimeoutException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
