import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateMultipartUploadRequestBodyMetadata extends SpeakeasyBase {
    /**
     * The SHA1 checksum of the upload binary blob. Optionally
     *
     * @remarks
     * be provided and serves as an additional security check when
     * later processing the file in complete-external-upload endpoint.
     */
    sha1Checksum?: string;
}
export declare enum CreateMultipartUploadRequestBodyUploadTypeEnum {
    Avatar = "avatar",
    ProfileBackground = "profile_background",
    CardBackground = "card_background",
    CustomEmoji = "custom_emoji",
    Composer = "composer"
}
export declare class CreateMultipartUploadRequestBody extends SpeakeasyBase {
    fileName: string;
    /**
     * File size should be represented in bytes.
     */
    fileSize: number;
    metadata?: CreateMultipartUploadRequestBodyMetadata;
    uploadType: CreateMultipartUploadRequestBodyUploadTypeEnum;
}
/**
 * external upload initialized
 */
export declare class CreateMultipartUpload200ApplicationJSON extends SpeakeasyBase {
    /**
     * The identifier of the multipart upload in the external
     *
     * @remarks
     * storage provider. This is the multipart upload_id in AWS S3.
     */
    externalUploadIdentifier: string;
    /**
     * The path of the temporary file on the external storage
     *
     * @remarks
     * service.
     */
    key: string;
    /**
     * A unique string that identifies the external upload.
     *
     * @remarks
     * This must be stored and then sent in the /complete-multipart
     * and /batch-presign-multipart-parts endpoints.
     */
    uniqueIdentifier: string;
}
export declare class CreateMultipartUploadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * external upload initialized
     */
    createMultipartUpload200ApplicationJSONObject?: CreateMultipartUpload200ApplicationJSON;
}
