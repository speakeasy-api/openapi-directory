import { SpeakeasyBase } from "../../../internal/utils";
import { S3FileUploadPart } from "./s3fileuploadpart";
import { UserFileKey } from "./userfilekey";
/**
 * Request model for completing a S3 file upload
 */
export declare class CompleteS3ShareUploadRequest extends SpeakeasyBase {
    /**
     * List of S3 file upload parts
     */
    parts: S3FileUploadPart[];
    /**
     * List of user file keys
     */
    userFileKeyList?: UserFileKey[];
}
