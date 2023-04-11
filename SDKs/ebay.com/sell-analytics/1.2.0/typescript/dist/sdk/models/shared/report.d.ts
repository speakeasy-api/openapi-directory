import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { Header } from "./header";
import { Metadata } from "./metadata";
import { RecordT } from "./record";
/**
 * The complex type that defines that defines the report.
 */
export declare class Report extends SpeakeasyBase {
    /**
     * A complex type containing the header of the report and the type of data containted in the rows of the report.
     */
    dimensionMetadata?: Metadata[];
    /**
     * The time stamp is formatted as an ISO 8601 string, which is based on the 24-hour Universal Coordinated Time (UTC) clock. If you specify an end date that is beyond the lastUpdatedDate value, eBay returns a report that contains data only up to the lastUpdateDate date. Format: [YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z Example: 2018-08-20T07:09:00.000Z
     */
    endDate?: string;
    /**
     * Type that defines the headers for the dimension keys and metrics returned in the report.
     */
    header?: Header;
    /**
     * The date and time, in ISO 8601 format, that indicates the last time the data returned in the report was updated.
     */
    lastUpdatedDate?: string;
    /**
     * A complex type containing the individual data records for the traffic report.
     */
    records?: RecordT[];
    /**
     * The start date of the date range used to calculate the report, in ISO 8601 format.
     */
    startDate?: string;
    /**
     * An array of any process errors or warnings that were generated during the processing of the call processing.
     */
    warnings?: ErrorT[];
}
