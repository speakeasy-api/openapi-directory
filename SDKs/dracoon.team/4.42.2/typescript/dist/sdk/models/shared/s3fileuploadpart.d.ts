import { SpeakeasyBase } from "../../../internal/utils";
/**
 * S3 file upload part information
 */
export declare class S3FileUploadPart extends SpeakeasyBase {
    /**
     * Corresponding part ETag
     */
    partEtag: string;
    /**
     * Corresponding part number
     */
    partNumber: number;
}
