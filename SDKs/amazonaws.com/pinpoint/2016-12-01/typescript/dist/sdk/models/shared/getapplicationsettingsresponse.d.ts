import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationSettingsResource } from "./applicationsettingsresource";
/**
 * Success
 */
export declare class GetApplicationSettingsResponse extends SpeakeasyBase {
    /**
     * Provides information about an application, including the default settings for an application.
     */
    applicationSettingsResource: ApplicationSettingsResource;
}
