import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The spread level for the placement group. <i>Only</i> Outpost placement groups can be spread across hosts.
 */
export declare enum DescribePlacementGroupsResultPlacementGroupsSpreadLevelEnum {
    Host = "host",
    Rack = "rack"
}
/**
 * The state of the placement group.
 */
export declare enum DescribePlacementGroupsResultPlacementGroupsStateEnum {
    Pending = "pending",
    Available = "available",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * The placement strategy.
 */
export declare enum DescribePlacementGroupsResultPlacementGroupsStrategyEnum {
    Cluster = "cluster",
    Spread = "spread",
    Partition = "partition"
}
/**
 * Describes a tag.
 */
export declare class DescribePlacementGroupsResultPlacementGroupsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a placement group.
 */
export declare class DescribePlacementGroupsResultPlacementGroups extends SpeakeasyBase {
    groupArn?: string;
    groupId?: string;
    groupName?: string;
    partitionCount?: number;
    spreadLevel?: DescribePlacementGroupsResultPlacementGroupsSpreadLevelEnum;
    state?: DescribePlacementGroupsResultPlacementGroupsStateEnum;
    strategy?: DescribePlacementGroupsResultPlacementGroupsStrategyEnum;
    tags?: DescribePlacementGroupsResultPlacementGroupsTags[];
}
/**
 * Success
 */
export declare class DescribePlacementGroupsResult extends SpeakeasyBase {
    placementGroups?: DescribePlacementGroupsResultPlacementGroups[];
}
