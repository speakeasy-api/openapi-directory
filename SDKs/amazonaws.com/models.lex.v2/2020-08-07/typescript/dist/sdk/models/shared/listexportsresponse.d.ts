import { SpeakeasyBase } from "../../../internal/utils";
import { ExportSummary } from "./exportsummary";
/**
 * Success
 */
export declare class ListExportsResponse extends SpeakeasyBase {
    botId?: string;
    botVersion?: string;
    exportSummaries?: ExportSummary[];
    localeId?: string;
    nextToken?: string;
}
