import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The strategy for conflict resolution.
 */
export declare enum DeleteBackendAPIRequestBodyResourceConfigConflictResolutionResolutionStrategyEnum {
    OptimisticConcurrency = "OPTIMISTIC_CONCURRENCY",
    Lambda = "LAMBDA",
    Automerge = "AUTOMERGE",
    None = "NONE"
}
/**
 * The conflict resolution strategy for your data stored in the data models.
 */
export declare class DeleteBackendAPIRequestBodyResourceConfigConflictResolution extends SpeakeasyBase {
    resolutionStrategy?: DeleteBackendAPIRequestBodyResourceConfigConflictResolutionResolutionStrategyEnum;
}
/**
 * Describes the authentication mode.
 */
export declare enum DeleteBackendAPIRequestBodyResourceConfigDefaultAuthTypeModeEnum {
    ApiKey = "API_KEY",
    AwsIam = "AWS_IAM",
    AmazonCognitoUserPools = "AMAZON_COGNITO_USER_POOLS",
    OpenidConnect = "OPENID_CONNECT"
}
/**
 * Describes settings for the authentication mode.
 */
export declare class DeleteBackendAPIRequestBodyResourceConfigDefaultAuthTypeSettings extends SpeakeasyBase {
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
export declare class DeleteBackendAPIRequestBodyResourceConfigDefaultAuthType extends SpeakeasyBase {
    mode?: DeleteBackendAPIRequestBodyResourceConfigDefaultAuthTypeModeEnum;
    settings?: DeleteBackendAPIRequestBodyResourceConfigDefaultAuthTypeSettings;
}
/**
 * The resource config for the data model, configured as a part of the Amplify project.
 */
export declare class DeleteBackendAPIRequestBodyResourceConfig extends SpeakeasyBase {
    additionalAuthTypes?: shared.BackendAPIAuthType[];
    apiName?: string;
    conflictResolution?: DeleteBackendAPIRequestBodyResourceConfigConflictResolution;
    defaultAuthType?: DeleteBackendAPIRequestBodyResourceConfigDefaultAuthType;
    service?: string;
    transformSchema?: string;
}
export declare class DeleteBackendAPIRequestBody extends SpeakeasyBase {
    /**
     * The resource config for the data model, configured as a part of the Amplify project.
     */
    resourceConfig?: DeleteBackendAPIRequestBodyResourceConfig;
    /**
     * The name of this resource.
     */
    resourceName: string;
}
export declare class DeleteBackendAPIRequest extends SpeakeasyBase {
    requestBody: DeleteBackendAPIRequestBody;
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
export declare class DeleteBackendAPIResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteBackendAPIResponse?: shared.DeleteBackendAPIResponse;
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
