import { SpeakeasyBase } from "../../../internal/utils";
import { SpendLimit } from "./spendlimit";
/**
 * Success
 */
export declare class DescribeSpendLimitsResult extends SpeakeasyBase {
    nextToken?: string;
    spendLimits?: SpendLimit[];
}
