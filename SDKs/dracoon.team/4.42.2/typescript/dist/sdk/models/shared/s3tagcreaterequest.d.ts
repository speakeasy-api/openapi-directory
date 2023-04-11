import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request model for creating a S3 tag
 */
export declare class S3TagCreateRequest extends SpeakeasyBase {
    /**
     * Determines whether S3 is mandatory or not
     */
    isMandatory?: boolean;
    /**
     * S3 tag key
     */
    key: string;
    /**
     * S3 tag value
     */
    value: string;
}
