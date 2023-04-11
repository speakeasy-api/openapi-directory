import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of terminal action: Uninstall an Android app.
 */
export declare enum UninstallAndroidAppDetailsTypeEnum {
    UninstallAndroidApp = "UninstallAndroidApp"
}
/**
 * Information about the action to take.
 */
export declare class UninstallAndroidAppDetails extends SpeakeasyBase {
    /**
     * The unique identifier of the app to be uninstalled.
     */
    appId?: string;
    /**
     * Type of terminal action: Uninstall an Android app.
     */
    type?: UninstallAndroidAppDetailsTypeEnum;
}
