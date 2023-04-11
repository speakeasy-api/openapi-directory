import { SpeakeasyBase } from "../../../internal/utils";
import { LaunchProfileInitializationActiveDirectory } from "./launchprofileinitializationactivedirectory";
import { LaunchProfileInitializationScript } from "./launchprofileinitializationscript";
import { LaunchProfilePlatformEnum } from "./launchprofileplatformenum";
/**
 * <p>A launch profile initialization contains information required for a workstation or server to connect to a launch profile.</p> <p>This includes scripts, endpoints, security groups, subnets, and other configuration.</p>
 */
export declare class LaunchProfileInitialization extends SpeakeasyBase {
    activeDirectory?: LaunchProfileInitializationActiveDirectory;
    ec2SecurityGroupIds?: string[];
    launchProfileId?: string;
    launchProfileProtocolVersion?: string;
    launchPurpose?: string;
    name?: string;
    platform?: LaunchProfilePlatformEnum;
    systemInitializationScripts?: LaunchProfileInitializationScript[];
    userInitializationScripts?: LaunchProfileInitializationScript[];
}
