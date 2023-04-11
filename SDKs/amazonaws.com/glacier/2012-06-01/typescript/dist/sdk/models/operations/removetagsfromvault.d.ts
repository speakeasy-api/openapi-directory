import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RemoveTagsFromVaultRequestBody extends SpeakeasyBase {
    /**
     * A list of tag keys. Each corresponding tag is removed from the vault.
     */
    tagKeys?: string[];
}
export declare enum RemoveTagsFromVaultOperationEnum {
    Remove = "remove"
}
export declare class RemoveTagsFromVaultRequest extends SpeakeasyBase {
    requestBody: RemoveTagsFromVaultRequestBody;
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
    operation: RemoveTagsFromVaultOperationEnum;
    /**
     * The name of the vault.
     */
    vaultName: string;
}
export declare class RemoveTagsFromVaultResponse extends SpeakeasyBase {
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
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
