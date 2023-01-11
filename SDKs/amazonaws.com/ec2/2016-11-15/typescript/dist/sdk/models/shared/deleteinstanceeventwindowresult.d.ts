import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the event window.
**/
export declare class DeleteInstanceEventWindowResultInstanceEventWindowState extends SpeakeasyBase {
    instanceEventWindowId?: Record<string, any>;
    state?: Record<string, any>;
}
export declare class DeleteInstanceEventWindowResult extends SpeakeasyBase {
    instanceEventWindowState?: DeleteInstanceEventWindowResultInstanceEventWindowState;
}
