import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ReplicateSecretToRegionsXAmzTargetEnum {
    SecretsmanagerReplicateSecretToRegions = "secretsmanager.ReplicateSecretToRegions"
}
export declare class ReplicateSecretToRegionsRequest extends SpeakeasyBase {
    replicateSecretToRegionsRequest: shared.ReplicateSecretToRegionsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ReplicateSecretToRegionsXAmzTargetEnum;
}
export declare class ReplicateSecretToRegionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServiceError
     */
    internalServiceError?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    replicateSecretToRegionsResponse?: shared.ReplicateSecretToRegionsResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
