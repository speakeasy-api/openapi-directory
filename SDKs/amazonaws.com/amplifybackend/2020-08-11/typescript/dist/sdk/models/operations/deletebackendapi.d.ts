import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteBackendApiPathParams extends SpeakeasyBase {
    appId: string;
    backendEnvironmentName: string;
}
export declare class DeleteBackendApiHeaders extends SpeakeasyBase {
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
export declare class DeleteBackendApiRequestBodyResourceConfigConflictResolution extends SpeakeasyBase {
    resolutionStrategy?: Record<string, any>;
}
/**
 * Describes settings for the authentication mode.
**/
export declare class DeleteBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings extends SpeakeasyBase {
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
export declare class DeleteBackendApiRequestBodyResourceConfigDefaultAuthType extends SpeakeasyBase {
    mode?: Record<string, any>;
    settings?: DeleteBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings;
}
/**
 * The resource config for the data model, configured as a part of the Amplify project.
**/
export declare class DeleteBackendApiRequestBodyResourceConfig extends SpeakeasyBase {
    additionalAuthTypes?: Record<string, any>;
    apiName?: Record<string, any>;
    conflictResolution?: DeleteBackendApiRequestBodyResourceConfigConflictResolution;
    defaultAuthType?: DeleteBackendApiRequestBodyResourceConfigDefaultAuthType;
    service?: Record<string, any>;
    transformSchema?: Record<string, any>;
}
export declare class DeleteBackendApiRequestBody extends SpeakeasyBase {
    resourceConfig?: DeleteBackendApiRequestBodyResourceConfig;
    resourceName: string;
}
export declare class DeleteBackendApiRequest extends SpeakeasyBase {
    pathParams: DeleteBackendApiPathParams;
    headers: DeleteBackendApiHeaders;
    request: DeleteBackendApiRequestBody;
}
export declare class DeleteBackendApiResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteBackendAPIResponse?: shared.DeleteBackendApiResponse;
    gatewayTimeoutException?: any;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
