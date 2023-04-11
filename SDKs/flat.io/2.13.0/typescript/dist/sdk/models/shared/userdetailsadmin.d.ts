import { SpeakeasyBase } from "../../../internal/utils";
import { ClassRolesEnum } from "./classrolesenum";
import { LicenseModeEnum } from "./licensemodeenum";
import { LicenseSourcesEnum } from "./licensesourcesenum";
import { OrganizationRolesEnum } from "./organizationrolesenum";
/**
 * Current active license of the user
 */
export declare class UserDetailsAdminLicense extends SpeakeasyBase {
    /**
     * ID of the current license
     */
    active?: boolean;
    /**
     * Date when the license expires
     */
    expirationDate?: Date;
    /**
     * ID of the current license
     */
    id?: string;
    /**
     * Mode of the license
     */
    mode?: LicenseModeEnum;
    /**
     * Source of the license
     */
    source?: LicenseSourcesEnum;
}
/**
 * The type of user account
 */
export declare enum UserDetailsAdminTypeEnum {
    User = "user",
    Guest = "guest"
}
/**
 * Public User details summary
 */
export declare class UserDetailsAdmin extends SpeakeasyBase {
    /**
     * User's Class Role (for Edu users only)
     */
    classRole?: ClassRolesEnum;
    /**
     * Email of the user
     */
    email?: string;
    /**
     * Firstname of the user (for education users)
     */
    firstname?: string;
    /**
     * Link to user profile (for Indiv. users only)
     */
    htmlUrl?: string;
    /**
     * The user unique identifier
     */
    id?: string;
    /**
     * Will be 'true' if user is part of the Flat Team
     */
    isFlatTeam?: boolean;
    /**
     * User license status. 'true' if user is an individual Power user
     */
    isPowerUser?: boolean;
    /**
     * Date of the last user activity
     */
    lastActivityDate?: Date;
    /**
     * Lastname of the user (for education users)
     */
    lastname?: string;
    /**
     * Current active license of the user
     */
    license?: UserDetailsAdminLicense;
    /**
     * A displayable name for the user (for consumer users)
     */
    name?: string;
    /**
     * Organization ID (for Edu users only)
     */
    organization?: string;
    /**
     * User's Organization Role (for Edu users only)
     */
    organizationRole?: OrganizationRolesEnum;
    /**
     * The URL of the picture to display
     */
    picture?: string;
    /**
     * The name that can be directly printed (name, firstname & lastname, or username)
     */
    printableName?: string;
    /**
     * The type of user account
     */
    type?: UserDetailsAdminTypeEnum;
    /**
     * The user name (unique for the organization)
     */
    username?: string;
}
