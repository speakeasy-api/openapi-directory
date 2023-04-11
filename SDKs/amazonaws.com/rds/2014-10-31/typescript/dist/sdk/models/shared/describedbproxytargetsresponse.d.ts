import { SpeakeasyBase } from "../../../internal/utils";
import { DBProxyTarget } from "./dbproxytarget";
/**
 * Success
 */
export declare class DescribeDBProxyTargetsResponse extends SpeakeasyBase {
    marker?: string;
    targets?: DBProxyTarget[];
}
