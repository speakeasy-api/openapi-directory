import { SpeakeasyBase } from "../../../internal/utils";
import { ServerGroupLaunchConfiguration } from "./servergrouplaunchconfiguration";
/**
 * Success
 */
export declare class GetAppLaunchConfigurationResponse extends SpeakeasyBase {
    appId?: string;
    autoLaunch?: boolean;
    roleName?: string;
    serverGroupLaunchConfigurations?: ServerGroupLaunchConfiguration[];
}
