import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The current state of the event window.
 */
export declare enum DeleteInstanceEventWindowResultInstanceEventWindowStateStateEnum {
    Creating = "creating",
    Deleting = "deleting",
    Active = "active",
    Deleted = "deleted"
}
/**
 * The state of the event window.
 */
export declare class DeleteInstanceEventWindowResultInstanceEventWindowState extends SpeakeasyBase {
    instanceEventWindowId?: string;
    state?: DeleteInstanceEventWindowResultInstanceEventWindowStateStateEnum;
}
/**
 * Success
 */
export declare class DeleteInstanceEventWindowResult extends SpeakeasyBase {
    instanceEventWindowState?: DeleteInstanceEventWindowResultInstanceEventWindowState;
}
