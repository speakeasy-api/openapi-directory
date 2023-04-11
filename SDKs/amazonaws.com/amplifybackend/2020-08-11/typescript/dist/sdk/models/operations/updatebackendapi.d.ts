import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The strategy for conflict resolution.
 */
export declare enum UpdateBackendAPIRequestBodyResourceConfigConflictResolutionResolutionStrategyEnum {
    OptimisticConcurrency = "OPTIMISTIC_CONCURRENCY",
    Lambda = "LAMBDA",
    Automerge = "AUTOMERGE",
    None = "NONE"
}
/**
 * The conflict resolution strategy for your data stored in the data models.
 */
export declare class UpdateBackendAPIRequestBodyResourceConfigConflictResolution extends SpeakeasyBase {
    resolutionStrategy?: UpdateBackendAPIRequestBodyResourceConfigConflictResolutionResolutionStrategyEnum;
}
/**
 * Describes the authentication mode.
 */
export declare enum UpdateBackendAPIRequestBodyResourceConfigDefaultAuthTypeModeEnum {
    ApiKey = "API_KEY",
    AwsIam = "AWS_IAM",
    AmazonCognitoUserPools = "AMAZON_COGNITO_USER_POOLS",
    OpenidConnect = "OPENID_CONNECT"
}
/**
 * Describes settings for the authentication mode.
 */
export declare class UpdateBackendAPIRequestBodyResourceConfigDefaultAuthTypeSettings extends SpeakeasyBase {
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
export declare class UpdateBackendAPIRequestBodyResourceConfigDefaultAuthType extends SpeakeasyBase {
    mode?: UpdateBackendAPIRequestBodyResourceConfigDefaultAuthTypeModeEnum;
    settings?: UpdateBackendAPIRequestBodyResourceConfigDefaultAuthTypeSettings;
}
/**
 * The resource config for the data model, configured as a part of the Amplify project.
 */
export declare class UpdateBackendAPIRequestBodyResourceConfig extends SpeakeasyBase {
    additionalAuthTypes?: shared.BackendAPIAuthType[];
    apiName?: string;
    conflictResolution?: UpdateBackendAPIRequestBodyResourceConfigConflictResolution;
    defaultAuthType?: UpdateBackendAPIRequestBodyResourceConfigDefaultAuthType;
    service?: string;
    transformSchema?: string;
}
export declare class UpdateBackendAPIRequestBody extends SpeakeasyBase {
    /**
     * The resource config for the data model, configured as a part of the Amplify project.
     */
    resourceConfig?: UpdateBackendAPIRequestBodyResourceConfig;
    /**
     * The name of this resource.
     */
    resourceName: string;
}
export declare class UpdateBackendAPIRequest extends SpeakeasyBase {
    requestBody: UpdateBackendAPIRequestBody;
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
    /**
     * The name of the backend environment.
     */
    backendEnvironmentName: string;
}
export declare class UpdateBackendAPIResponse extends SpeakeasyBase {
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
    updateBackendAPIResponse?: shared.UpdateBackendAPIResponse;
}
