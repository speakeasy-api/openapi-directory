import { SpeakeasyBase } from "../../../internal/utils";
export declare class Snapshot extends SpeakeasyBase {
    /**
     * The HTTP status of the URL requested
     */
    status?: number;
    /**
     * The timestamp of the snapshot in [RFC 3339](http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html) format
     */
    timestamp?: string;
    /**
     * The URL requested
     */
    url?: string;
}
