import { SpeakeasyBase } from "../../../internal/utils";
/**
 * One or more targets associated with the event window.
**/
export declare class AssociateInstanceEventWindowResultInstanceEventWindowAssociationTarget extends SpeakeasyBase {
    dedicatedHostIds?: Record<string, any>;
    instanceIds?: Record<string, any>;
    tags?: Record<string, any>;
}
/**
 * Information about the event window.
**/
export declare class AssociateInstanceEventWindowResultInstanceEventWindow extends SpeakeasyBase {
    associationTarget?: AssociateInstanceEventWindowResultInstanceEventWindowAssociationTarget;
    cronExpression?: Record<string, any>;
    instanceEventWindowId?: Record<string, any>;
    name?: Record<string, any>;
    state?: Record<string, any>;
    tags?: Record<string, any>;
    timeRanges?: Record<string, any>;
}
export declare class AssociateInstanceEventWindowResult extends SpeakeasyBase {
    instanceEventWindow?: AssociateInstanceEventWindowResultInstanceEventWindow;
}
