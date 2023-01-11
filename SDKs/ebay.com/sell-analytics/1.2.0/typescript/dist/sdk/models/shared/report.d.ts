import { SpeakeasyBase } from "../../../internal/utils";
import { Metadata } from "./metadata";
import { Header } from "./header";
import { RecordT } from "./record";
import { ErrorT } from "./error";
/**
 * The complex type that defines that defines the report.
**/
export declare class Report extends SpeakeasyBase {
    dimensionMetadata?: Metadata[];
    endDate?: string;
    header?: Header;
    lastUpdatedDate?: string;
    records?: RecordT[];
    startDate?: string;
    warnings?: ErrorT[];
}
