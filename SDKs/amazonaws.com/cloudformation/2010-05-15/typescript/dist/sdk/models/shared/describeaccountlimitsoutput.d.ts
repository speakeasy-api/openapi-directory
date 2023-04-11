import { SpeakeasyBase } from "../../../internal/utils";
import { AccountLimit } from "./accountlimit";
/**
 * The output for the <a>DescribeAccountLimits</a> action.
 */
export declare class DescribeAccountLimitsOutput extends SpeakeasyBase {
    accountLimits?: AccountLimit[];
    nextToken?: string;
}
