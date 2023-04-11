import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The strategy for conflict resolution.
 */
export declare enum CreateBackendAPIRequestBodyResourceConfigConflictResolutionResolutionStrategyEnum {
    OptimisticConcurrency = "OPTIMISTIC_CONCURRENCY",
    Lambda = "LAMBDA",
    Automerge = "AUTOMERGE",
    None = "NONE"
}
/**
 * The conflict resolution strategy for your data stored in the data models.
 */
export declare class CreateBackendAPIRequestBodyResourceConfigConflictResolution extends SpeakeasyBase {
    resolutionStrategy?: CreateBackendAPIRequestBodyResourceConfigConflictResolutionResolutionStrategyEnum;
}
/**
 * Describes the authentication mode.
 */
export declare enum CreateBackendAPIRequestBodyResourceConfigDefaultAuthTypeModeEnum {
    ApiKey = "API_KEY",
    AwsIam = "AWS_IAM",
    AmazonCognitoUserPools = "AMAZON_COGNITO_USER_POOLS",
    OpenidConnect = "OPENID_CONNECT"
}
/**
 * Describes settings for the authentication mode.
 */
export declare class CreateBackendAPIRequestBodyResourceConfigDefaultAuthTypeSettings extends SpeakeasyBase {
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
export declare class CreateBackendAPIRequestBodyResourceConfigDefaultAuthType extends SpeakeasyBase {
    mode?: CreateBackendAPIRequestBodyResourceConfigDefaultAuthTypeModeEnum;
    settings?: CreateBackendAPIRequestBodyResourceConfigDefaultAuthTypeSettings;
}
/**
 * The resource config for the data model, configured as a part of the Amplify project.
 */
export declare class CreateBackendAPIRequestBodyResourceConfig extends SpeakeasyBase {
    additionalAuthTypes?: shared.BackendAPIAuthType[];
    apiName?: string;
    conflictResolution?: CreateBackendAPIRequestBodyResourceConfigConflictResolution;
    defaultAuthType?: CreateBackendAPIRequestBodyResourceConfigDefaultAuthType;
    service?: string;
    transformSchema?: string;
}
export declare class CreateBackendAPIRequestBody extends SpeakeasyBase {
    /**
     * The name of the backend environment.
     */
    backendEnvironmentName: string;
    /**
     * The resource config for the data model, configured as a part of the Amplify project.
     */
    resourceConfig: CreateBackendAPIRequestBodyResourceConfig;
    /**
     * The name of this resource.
     */
    resourceName: string;
}
export declare class CreateBackendAPIRequest extends SpeakeasyBase {
    requestBody: CreateBackendAPIRequestBody;
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
}
export declare class CreateBackendAPIResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    createBackendAPIResponse?: shared.CreateBackendAPIResponse;
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
}
