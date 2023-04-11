import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Presigned URL information
 */
export declare class PresignedUrl extends SpeakeasyBase {
    /**
     * Corresponding part number
     */
    partNumber: number;
    /**
     * S3 presigned URL
     */
    url: string;
}
