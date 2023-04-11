import { SpeakeasyBase } from "../../../internal/utils";
import { ExportSummary } from "./exportsummary";
/**
 * Success
 */
export declare class ListExportsOutput extends SpeakeasyBase {
    exportSummaries?: ExportSummary[];
    nextToken?: string;
}
