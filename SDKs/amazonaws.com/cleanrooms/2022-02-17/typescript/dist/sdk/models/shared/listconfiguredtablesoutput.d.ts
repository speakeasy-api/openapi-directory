import { SpeakeasyBase } from "../../../internal/utils";
import { ConfiguredTableSummary } from "./configuredtablesummary";
/**
 * Success
 */
export declare class ListConfiguredTablesOutput extends SpeakeasyBase {
    configuredTableSummaries: ConfiguredTableSummary[];
    nextToken?: string;
}
