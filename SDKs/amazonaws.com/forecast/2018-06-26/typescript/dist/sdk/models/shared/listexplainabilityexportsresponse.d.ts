import { SpeakeasyBase } from "../../../internal/utils";
import { ExplainabilityExportSummary } from "./explainabilityexportsummary";
/**
 * Success
 */
export declare class ListExplainabilityExportsResponse extends SpeakeasyBase {
    explainabilityExports?: ExplainabilityExportSummary[];
    nextToken?: string;
}
