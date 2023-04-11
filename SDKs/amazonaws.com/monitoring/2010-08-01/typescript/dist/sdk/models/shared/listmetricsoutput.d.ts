import { SpeakeasyBase } from "../../../internal/utils";
import { Metric } from "./metric";
/**
 * Success
 */
export declare class ListMetricsOutput extends SpeakeasyBase {
    metrics?: Metric[];
    nextToken?: string;
    owningAccounts?: string[];
}
