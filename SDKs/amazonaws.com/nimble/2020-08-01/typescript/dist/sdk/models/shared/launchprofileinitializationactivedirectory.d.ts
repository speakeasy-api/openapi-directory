import { SpeakeasyBase } from "../../../internal/utils";
import { ActiveDirectoryComputerAttribute } from "./activedirectorycomputerattribute";
/**
 * The launch profile initialization Active Directory contains information required for the launch profile to connect to the Active Directory.
 */
export declare class LaunchProfileInitializationActiveDirectory extends SpeakeasyBase {
    computerAttributes?: ActiveDirectoryComputerAttribute[];
    directoryId?: string;
    directoryName?: string;
    dnsIpAddresses?: string[];
    organizationalUnitDistinguishedName?: string;
    studioComponentId?: string;
    studioComponentName?: string;
}
