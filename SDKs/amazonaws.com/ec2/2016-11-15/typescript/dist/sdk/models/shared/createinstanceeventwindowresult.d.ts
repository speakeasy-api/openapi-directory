import { SpeakeasyBase } from "../../../internal/utils";
/**
 * One or more targets associated with the event window.
**/
export declare class CreateInstanceEventWindowResultInstanceEventWindowAssociationTarget extends SpeakeasyBase {
    dedicatedHostIds?: Record<string, any>;
    instanceIds?: Record<string, any>;
    tags?: Record<string, any>;
}
/**
 * Information about the event window.
**/
export declare class CreateInstanceEventWindowResultInstanceEventWindow extends SpeakeasyBase {
    associationTarget?: CreateInstanceEventWindowResultInstanceEventWindowAssociationTarget;
    cronExpression?: Record<string, any>;
    instanceEventWindowId?: Record<string, any>;
    name?: Record<string, any>;
    state?: Record<string, any>;
    tags?: Record<string, any>;
    timeRanges?: Record<string, any>;
}
export declare class CreateInstanceEventWindowResult extends SpeakeasyBase {
    instanceEventWindow?: CreateInstanceEventWindowResultInstanceEventWindow;
}
