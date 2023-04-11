import { SpeakeasyBase } from "../../../internal/utils";
import { DBProxyTargetGroup } from "./dbproxytargetgroup";
/**
 * Success
 */
export declare class DescribeDBProxyTargetGroupsResponse extends SpeakeasyBase {
    marker?: string;
    targetGroups?: DBProxyTargetGroup[];
}
