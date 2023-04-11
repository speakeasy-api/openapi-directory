import { SpeakeasyBase } from "../../../internal/utils";
export declare class PreSignInfoFields extends SpeakeasyBase {
    /**
     * The header name
     */
    name?: string;
    /**
     * The header value
     */
    value?: string;
}
/**
 * A PreSignInfo object
 */
export declare class PreSignInfo extends SpeakeasyBase {
    /**
     * The URL you use in your SMS text.  It is the file location.
     */
    fetchUrl?: string;
    /**
     * Name value objects to add to the headers of the PUT request.
     */
    fields?: PreSignInfoFields[];
    /**
     * The address of the PUT request to upload the file.
     */
    putUrl?: string;
}
