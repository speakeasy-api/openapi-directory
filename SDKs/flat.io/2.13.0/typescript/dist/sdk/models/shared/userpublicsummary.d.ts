import { SpeakeasyBase } from "../../../internal/utils";
import { ClassRolesEnum } from "./classrolesenum";
import { OrganizationRolesEnum } from "./organizationrolesenum";
/**
 * The type of user account
 */
export declare enum UserPublicSummaryTypeEnum {
    User = "user",
    Guest = "guest"
}
/**
 * Public User details summary
 */
export declare class UserPublicSummary extends SpeakeasyBase {
    /**
     * User's Class Role (for Edu users only)
     */
    classRole?: ClassRolesEnum;
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
     * Lastname of the user (for education users)
     */
    lastname?: string;
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
    type?: UserPublicSummaryTypeEnum;
    /**
     * The user name (unique for the organization)
     */
    username?: string;
}
