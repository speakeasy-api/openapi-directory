import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The spread level for the placement group. <i>Only</i> Outpost placement groups can be spread across hosts.
 */
export declare enum CreatePlacementGroupResultPlacementGroupSpreadLevelEnum {
    Host = "host",
    Rack = "rack"
}
/**
 * The state of the placement group.
 */
export declare enum CreatePlacementGroupResultPlacementGroupStateEnum {
    Pending = "pending",
    Available = "available",
    Deleting = "deleting",
    Deleted = "deleted"
}
/**
 * The placement strategy.
 */
export declare enum CreatePlacementGroupResultPlacementGroupStrategyEnum {
    Cluster = "cluster",
    Spread = "spread",
    Partition = "partition"
}
/**
 * Describes a tag.
 */
export declare class CreatePlacementGroupResultPlacementGroupTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the placement group.
 */
export declare class CreatePlacementGroupResultPlacementGroup extends SpeakeasyBase {
    groupArn?: string;
    groupId?: string;
    groupName?: string;
    partitionCount?: number;
    spreadLevel?: CreatePlacementGroupResultPlacementGroupSpreadLevelEnum;
    state?: CreatePlacementGroupResultPlacementGroupStateEnum;
    strategy?: CreatePlacementGroupResultPlacementGroupStrategyEnum;
    tags?: CreatePlacementGroupResultPlacementGroupTags[];
}
/**
 * Success
 */
export declare class CreatePlacementGroupResult extends SpeakeasyBase {
    placementGroup?: CreatePlacementGroupResultPlacementGroup;
}
