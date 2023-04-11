import { SpeakeasyBase } from "../../../internal/utils";
import { Destination } from "./destination";
import { Detail } from "./detail";
import { ItemRouting } from "./itemrouting";
/**
 * OK
 */
export declare class Report extends SpeakeasyBase {
    /**
     * total destinations recieving the report(s)
     */
    destinationCount?: number;
    /**
     * where the report is being sent to
     */
    destinations?: Destination[];
    /**
     * total errors found during initial validation.  There may be multiple errors per item.
     */
    errorCount?: number;
    /**
     * a list of errors in the report
     */
    errors?: Detail[];
    /**
     * the id for the report assigned by the Hub
     */
    id: string;
    /**
     * total number of individual reports sent to the Hub (in a csv, the number of data lines sent)
     */
    reportItemCount?: number;
    /**
     * The receiver destination names for each item in the report. This is displayed when verbose=true is present on the query string.
     */
    routing?: ItemRouting[];
    /**
     * the timestamp for this report submission
     */
    timestamp?: string;
    /**
     * the topic configured for the client organization sender
     */
    topic?: string;
    /**
     * total warnings found during initial validation.  There may be multiple warnings per item.
     */
    warningCount?: number;
    /**
     * a list of warnings in the report
     */
    warnings?: Detail[];
}
