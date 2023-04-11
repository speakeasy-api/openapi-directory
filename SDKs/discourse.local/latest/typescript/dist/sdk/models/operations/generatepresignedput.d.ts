import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GeneratePresignedPutRequestBodyMetadata extends SpeakeasyBase {
    /**
     * The SHA1 checksum of the upload binary blob. Optionally
     *
     * @remarks
     * be provided and serves as an additional security check when
     * later processing the file in complete-external-upload endpoint.
     */
    sha1Checksum?: string;
}
export declare enum GeneratePresignedPutRequestBodyTypeEnum {
    Avatar = "avatar",
    ProfileBackground = "profile_background",
    CardBackground = "card_background",
    CustomEmoji = "custom_emoji",
    Composer = "composer"
}
export declare class GeneratePresignedPutRequestBody extends SpeakeasyBase {
    fileName: string;
    /**
     * File size should be represented in bytes.
     */
    fileSize: number;
    metadata?: GeneratePresignedPutRequestBodyMetadata;
    type: GeneratePresignedPutRequestBodyTypeEnum;
}
/**
 * external upload initialized
 */
export declare class GeneratePresignedPut200ApplicationJSON extends SpeakeasyBase {
    /**
     * The path of the temporary file on the external storage
     *
     * @remarks
     * service.
     */
    key?: string;
    /**
     * A unique string that identifies the external upload.
     *
     * @remarks
     * This must be stored and then sent in the /complete-external-upload
     * endpoint to complete the direct upload.
     */
    uniqueIdentifier?: string;
    /**
     * A presigned PUT URL which must be used to upload
     *
     * @remarks
     * the file binary blob to.
     */
    url?: string;
}
export declare class GeneratePresignedPutResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * external upload initialized
     */
    generatePresignedPut200ApplicationJSONObject?: GeneratePresignedPut200ApplicationJSON;
}
