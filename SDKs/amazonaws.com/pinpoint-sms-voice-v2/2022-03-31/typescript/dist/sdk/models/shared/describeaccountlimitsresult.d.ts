import { SpeakeasyBase } from "../../../internal/utils";
import { AccountLimit } from "./accountlimit";
/**
 * Success
 */
export declare class DescribeAccountLimitsResult extends SpeakeasyBase {
    accountLimits?: AccountLimit[];
    nextToken?: string;
}
