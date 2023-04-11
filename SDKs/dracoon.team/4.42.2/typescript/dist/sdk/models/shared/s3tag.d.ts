import { SpeakeasyBase } from "../../../internal/utils";
/**
 * S3 tag information
 */
export declare class S3Tag extends SpeakeasyBase {
    /**
     * S3 tag ID
     */
    id?: number;
    /**
     * Determines whether S3 is mandatory or not
     */
    isMandatory?: boolean;
    /**
     * S3 tag key
     */
    key?: string;
    /**
     * S3 tag value
     */
    value?: string;
}
