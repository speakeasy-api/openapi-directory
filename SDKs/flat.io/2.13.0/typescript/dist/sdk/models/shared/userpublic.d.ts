import { SpeakeasyBase } from "../../../internal/utils";
import { ClassRolesEnum } from "./classrolesenum";
import { OrganizationRolesEnum } from "./organizationrolesenum";
export declare enum UserPublicTypeEnum {
    User = "user",
    Guest = "guest"
}
/**
 * Public User details summary
**/
export declare class UserPublic extends SpeakeasyBase {
    bio?: string;
    classRole?: ClassRolesEnum;
    coverPicture?: string;
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
    name?: string;
    organization?: string;
    organizationRole?: OrganizationRolesEnum;
    ownedPublicScoresCount?: number;
    picture?: string;
    printableName?: string;
    profileTheme?: string;
    registrationDate?: Date;
    type?: UserPublicTypeEnum;
    username?: string;
}
