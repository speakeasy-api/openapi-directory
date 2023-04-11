import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Represents a vault's notification configuration.
 */
export declare class SetVaultNotificationsRequestBodyVaultNotificationConfig extends SpeakeasyBase {
    events?: string[];
    snsTopic?: string;
}
export declare class SetVaultNotificationsRequestBody extends SpeakeasyBase {
    /**
     * Represents a vault's notification configuration.
     */
    vaultNotificationConfig?: SetVaultNotificationsRequestBodyVaultNotificationConfig;
}
export declare class SetVaultNotificationsRequest extends SpeakeasyBase {
    requestBody: SetVaultNotificationsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The <code>AccountId</code> value is the AWS account ID of the account that owns the vault. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon S3 Glacier uses the AWS account ID associated with the credentials used to sign the request. If you use an account ID, do not include any hyphens ('-') in the ID.
     */
    accountId: string;
    /**
     * The name of the vault.
     */
    vaultName: string;
}
export declare class SetVaultNotificationsResponse extends SpeakeasyBase {
    contentType: string;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
}
