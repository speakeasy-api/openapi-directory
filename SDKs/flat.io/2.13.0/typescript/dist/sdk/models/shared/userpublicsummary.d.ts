import { SpeakeasyBase } from "../../../internal/utils";
import { ClassRolesEnum } from "./classrolesenum";
import { OrganizationRolesEnum } from "./organizationrolesenum";
export declare enum UserPublicSummaryTypeEnum {
    User = "user",
    Guest = "guest"
}
/**
 * Public User details summary
**/
export declare class UserPublicSummary extends SpeakeasyBase {
    classRole?: ClassRolesEnum;
    firstname?: string;
    htmlUrl?: string;
    id?: string;
    isFlatTeam?: boolean;
    isPowerUser?: boolean;
    lastname?: string;
    name?: string;
    organization?: string;
    organizationRole?: OrganizationRolesEnum;
    picture?: string;
    printableName?: string;
    type?: UserPublicSummaryTypeEnum;
    username?: string;
}
