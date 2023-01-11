import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a placement group.
**/
export declare class CreatePlacementGroupResultPlacementGroup extends SpeakeasyBase {
    groupId?: Record<string, any>;
    groupName?: Record<string, any>;
    partitionCount?: Record<string, any>;
    state?: Record<string, any>;
    strategy?: Record<string, any>;
    tags?: Record<string, any>;
}
export declare class CreatePlacementGroupResult extends SpeakeasyBase {
    placementGroup?: CreatePlacementGroupResultPlacementGroup;
}
