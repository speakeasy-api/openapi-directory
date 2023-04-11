import { SpeakeasyBase } from "../../../internal/utils";
import { DBProxy } from "./dbproxy";
/**
 * Success
 */
export declare class DescribeDBProxiesResponse extends SpeakeasyBase {
    dbProxies?: DBProxy[];
    marker?: string;
}
