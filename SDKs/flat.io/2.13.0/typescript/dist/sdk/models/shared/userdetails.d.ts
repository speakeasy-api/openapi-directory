import { SpeakeasyBase } from "../../../internal/utils";
import { ClassRolesEnum } from "./classrolesenum";
import { FlatLocalesEnum } from "./flatlocalesenum";
import { OrganizationRolesEnum } from "./organizationrolesenum";
/**
 * The type of user account
 */
export declare enum UserDetailsTypeEnum {
    User = "user",
    Guest = "guest"
}
/**
 * Public User details summary
 */
export declare class UserDetails extends SpeakeasyBase {
    /**
     * User's biography
     */
    bio?: string;
    /**
     * User's Class Role (for Edu users only)
     */
    classRole?: ClassRolesEnum;
    /**
     * Cover picture (backgroud) for the profile
     */
    coverPicture?: string;
    /**
     * The ID of the user profile cover picture
     */
    coverPictureFile?: string;
    /**
     * Firstname of the user (for education users)
     */
    firstname?: string;
    /**
     * Number of followers the user have
     */
    followersCount?: number;
    /**
     * Number of people the user follow
     */
    followingCount?: number;
    /**
     * Link to user profile (for Indiv. users only)
     */
    htmlUrl?: string;
    /**
     * The user unique identifier
     */
    id?: string;
    /**
     * An array of the instrument identifiers.
     *
     * @remarks
     * The format of the strings is `{instrument-group}.{instrument-id}`.
     *
     */
    instruments?: string[];
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
     * Number of the scores liked by the user
     */
    likedScoresCount?: number;
    /**
     * The user language
     */
    locale?: FlatLocalesEnum;
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
     * Number of public scores the user have
     */
    ownedPublicScoresCount?: number;
    /**
     * The URL of the picture to display
     */
    picture?: string;
    /**
     * The ID of the user profile picture
     */
    pictureFile?: string;
    /**
     * The name that can be directly printed (name, firstname & lastname, or username)
     */
    printableName?: string;
    /**
     * Tell either this user profile is private or not (individual accounts only)
     */
    privateProfile?: boolean;
    /**
     * Theme (background) for the profile
     */
    profileTheme?: string;
    /**
     * Date the user signed up
     */
    registrationDate?: Date;
    /**
     * The type of user account
     */
    type?: UserDetailsTypeEnum;
    /**
     * The user name (unique for the organization)
     */
    username?: string;
}
