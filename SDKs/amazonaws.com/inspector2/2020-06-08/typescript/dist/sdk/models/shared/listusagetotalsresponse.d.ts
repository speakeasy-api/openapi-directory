import { SpeakeasyBase } from "../../../internal/utils";
import { UsageTotal } from "./usagetotal";
/**
 * Success
 */
export declare class ListUsageTotalsResponse extends SpeakeasyBase {
    nextToken?: string;
    totals?: UsageTotal[];
}
