import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AddTagsToVaultRequestBody extends SpeakeasyBase {
    /**
     * The tags to add to the vault. Each tag is composed of a key and a value. The value can be an empty string.
     */
    tags?: Record<string, string>;
}
export declare enum AddTagsToVaultOperationEnum {
    Add = "add"
}
export declare class AddTagsToVaultRequest extends SpeakeasyBase {
    requestBody: AddTagsToVaultRequestBody;
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
    operation: AddTagsToVaultOperationEnum;
    /**
     * The name of the vault.
     */
    vaultName: string;
}
export declare class AddTagsToVaultResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * MissingParameterValueException
     */
    missingParameterValueException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
}
