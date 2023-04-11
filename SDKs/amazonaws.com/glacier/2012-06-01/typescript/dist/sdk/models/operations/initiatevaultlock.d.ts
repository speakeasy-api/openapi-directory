import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Contains the vault lock policy.
 */
export declare class InitiateVaultLockRequestBodyPolicy extends SpeakeasyBase {
    policy?: string;
}
export declare class InitiateVaultLockRequestBody extends SpeakeasyBase {
    /**
     * Contains the vault lock policy.
     */
    policy?: InitiateVaultLockRequestBodyPolicy;
}
export declare class InitiateVaultLockRequest extends SpeakeasyBase {
    requestBody: InitiateVaultLockRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The <code>AccountId</code> value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID.
     */
    accountId: string;
    /**
     * The name of the vault.
     */
    vaultName: string;
}
export declare class InitiateVaultLockResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    initiateVaultLockOutput?: Record<string, any>;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * MissingParameterValueException
     */
    missingParameterValueException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
