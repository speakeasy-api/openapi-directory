import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UploadArchiveRequestBody extends SpeakeasyBase {
    /**
     * The data to upload.
     */
    body?: string;
}
export declare class UploadArchiveRequest extends SpeakeasyBase {
    requestBody: UploadArchiveRequestBody;
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
    /**
     * The optional description of the archive you are uploading.
     */
    xAmzArchiveDescription?: string;
    /**
     * The SHA256 tree hash of the data being uploaded.
     */
    xAmzSha256TreeHash?: string;
}
export declare class UploadArchiveResponse extends SpeakeasyBase {
    /**
     * Success
     */
    archiveCreationOutput?: Record<string, any>;
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
     * RequestTimeoutException
     */
    requestTimeoutException?: any;
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
