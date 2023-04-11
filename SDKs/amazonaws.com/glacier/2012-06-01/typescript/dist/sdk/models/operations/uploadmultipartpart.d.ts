import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UploadMultipartPartRequestBody extends SpeakeasyBase {
    /**
     * The data to upload.
     */
    body?: string;
}
export declare class UploadMultipartPartRequest extends SpeakeasyBase {
    /**
     * Identifies the range of bytes in the assembled archive that will be uploaded in this part. Amazon S3 Glacier uses this information to assemble the archive in the proper sequence. The format of this header follows RFC 2616. An example header is Content-Range:bytes 0-4194303/*.
     */
    contentRange?: string;
    requestBody: UploadMultipartPartRequestBody;
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
     * The upload ID of the multipart upload.
     */
    uploadId: string;
    /**
     * The name of the vault.
     */
    vaultName: string;
    /**
     * The SHA256 tree hash of the data being uploaded.
     */
    xAmzSha256TreeHash?: string;
}
export declare class UploadMultipartPartResponse extends SpeakeasyBase {
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
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    uploadMultipartPartOutput?: Record<string, any>;
}
