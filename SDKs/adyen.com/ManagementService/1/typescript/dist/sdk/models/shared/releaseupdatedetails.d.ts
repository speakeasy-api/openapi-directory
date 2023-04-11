import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of terminal action: Update Release.
 */
export declare enum ReleaseUpdateDetailsTypeEnum {
    ReleaseUpdate = "ReleaseUpdate"
}
/**
 * Information about the action to take.
 */
export declare class ReleaseUpdateDetails extends SpeakeasyBase {
    /**
     * Type of terminal action: Update Release.
     */
    type?: ReleaseUpdateDetailsTypeEnum;
    /**
     * Boolean flag that tells if the terminal should update at the first next maintenance call. If false, terminal will update on its configured reboot time.
     */
    updateAtFirstMaintenanceCall?: boolean;
}
