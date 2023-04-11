import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of terminal action: Install an Android app.
 */
export declare enum InstallAndroidAppDetailsTypeEnum {
    InstallAndroidApp = "InstallAndroidApp"
}
/**
 * Information about the action to take.
 */
export declare class InstallAndroidAppDetails extends SpeakeasyBase {
    /**
     * The unique identifier of the app to be installed.
     */
    appId?: string;
    /**
     * Type of terminal action: Install an Android app.
     */
    type?: InstallAndroidAppDetailsTypeEnum;
}
