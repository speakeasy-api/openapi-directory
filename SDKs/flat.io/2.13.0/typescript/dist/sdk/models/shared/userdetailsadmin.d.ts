import { SpeakeasyBase } from "../../../internal/utils";
import { LicenseModeEnum } from "./licensemodeenum";
import { LicenseSourcesEnum } from "./licensesourcesenum";
import { ClassRolesEnum } from "./classrolesenum";
import { OrganizationRolesEnum } from "./organizationrolesenum";
/**
 * Current active license of the user
**/
export declare class UserDetailsAdminLicense extends SpeakeasyBase {
    active?: boolean;
    expirationDate?: Date;
    id?: string;
    mode?: LicenseModeEnum;
    source?: LicenseSourcesEnum;
}
export declare enum UserDetailsAdminTypeEnum {
    User = "user",
    Guest = "guest"
}
/**
 * Public User details summary
**/
export declare class UserDetailsAdmin extends SpeakeasyBase {
    classRole?: ClassRolesEnum;
    email?: string;
    firstname?: string;
    htmlUrl?: string;
    id?: string;
    isFlatTeam?: boolean;
    isPowerUser?: boolean;
    lastActivityDate?: Date;
    lastname?: string;
    license?: UserDetailsAdminLicense;
    name?: string;
    organization?: string;
    organizationRole?: OrganizationRolesEnum;
    picture?: string;
    printableName?: string;
    type?: UserDetailsAdminTypeEnum;
    username?: string;
}
