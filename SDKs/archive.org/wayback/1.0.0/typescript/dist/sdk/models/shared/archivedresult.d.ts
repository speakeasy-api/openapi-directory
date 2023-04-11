import { SpeakeasyBase } from "../../../internal/utils";
import { Snapshot } from "./snapshot";
export declare class ArchivedResult extends SpeakeasyBase {
    snapshot: Snapshot;
    /**
     * The user-supplied tag for use in collation
     */
    tag?: string;
    /**
     * The _intepreted_ timestamp requested, in [RFC 3339](http://xml2rfc.ietf.org/public/rfc/html/rfc3339.html) format
     */
    timestamp: string;
    /**
     * The URL requested
     */
    url: string;
}
