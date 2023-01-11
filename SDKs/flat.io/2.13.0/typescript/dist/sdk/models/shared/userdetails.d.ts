import { SpeakeasyBase } from "../../../internal/utils";
import { ClassRolesEnum } from "./classrolesenum";
import { FlatLocalesEnum } from "./flatlocalesenum";
import { OrganizationRolesEnum } from "./organizationrolesenum";
export declare enum UserDetailsTypeEnum {
    User = "user",
    Guest = "guest"
}
/**
 * Public User details summary
**/
export declare class UserDetails extends SpeakeasyBase {
    bio?: string;
    classRole?: ClassRolesEnum;
    coverPicture?: string;
    coverPictureFile?: string;
    firstname?: string;
    followersCount?: number;
    followingCount?: number;
    htmlUrl?: string;
    id?: string;
    instruments?: string[];
    isFlatTeam?: boolean;
    isPowerUser?: boolean;
    lastname?: string;
    likedScoresCount?: number;
    locale?: FlatLocalesEnum;
    name?: string;
    organization?: string;
    organizationRole?: OrganizationRolesEnum;
    ownedPublicScoresCount?: number;
    picture?: string;
    pictureFile?: string;
    printableName?: string;
    privateProfile?: boolean;
    profileTheme?: string;
    registrationDate?: Date;
    type?: UserDetailsTypeEnum;
    username?: string;
}
