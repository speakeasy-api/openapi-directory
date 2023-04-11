import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProvisioningProfileResponseProvisioningProfileTypeEnum {
    Adhoc = "adhoc",
    Enterprise = "enterprise",
    Other = "other"
}
/**
 * A response containing information about an iOS provisioning profile.
 */
export declare class ProvisioningProfileResponse extends SpeakeasyBase {
    /**
     * Array of provisioning profiles for any app extensions
     */
    appexProfiles?: ProvisioningProfileResponse[];
    /**
     * The bundle identifier associated with the profile.
     */
    provisioningBundleId?: string;
    /**
     * The name of the provisioning profile.
     */
    provisioningProfileName?: string;
    provisioningProfileType: ProvisioningProfileResponseProvisioningProfileTypeEnum;
    /**
     * The team identifier.
     */
    teamIdentifier?: string;
    udids?: string[];
}
