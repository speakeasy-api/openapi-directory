import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LicenseModeEnum } from "./licensemodeenum";
import { LicenseSourcesEnum } from "./licensesourcesenum";
import { ClassRolesEnum } from "./classrolesenum";
import { OrganizationRolesEnum } from "./organizationrolesenum";



// UserDetailsAdminLicense
/** 
 * Current active license of the user
**/
export class UserDetailsAdminLicense extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=expirationDate" })
  expirationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: LicenseModeEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: LicenseSourcesEnum;
}

export enum UserDetailsAdminTypeEnum {
    User = "user",
    Guest = "guest"
}


// UserDetailsAdmin
/** 
 * Public User details summary
**/
export class UserDetailsAdmin extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classRole" })
  classRole?: ClassRolesEnum;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=firstname" })
  firstname?: string;

  @SpeakeasyMetadata({ data: "json, name=htmlUrl" })
  htmlUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=isFlatTeam" })
  isFlatTeam?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isPowerUser" })
  isPowerUser?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastActivityDate" })
  lastActivityDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastname" })
  lastname?: string;

  @SpeakeasyMetadata({ data: "json, name=license" })
  license?: UserDetailsAdminLicense;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=organization" })
  organization?: string;

  @SpeakeasyMetadata({ data: "json, name=organizationRole" })
  organizationRole?: OrganizationRolesEnum;

  @SpeakeasyMetadata({ data: "json, name=picture" })
  picture?: string;

  @SpeakeasyMetadata({ data: "json, name=printableName" })
  printableName?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: UserDetailsAdminTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
