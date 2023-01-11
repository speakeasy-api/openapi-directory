import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClassRolesEnum } from "./classrolesenum";
import { OrganizationRolesEnum } from "./organizationrolesenum";


export enum UserPublicSummaryTypeEnum {
    User = "user",
    Guest = "guest"
}


// UserPublicSummary
/** 
 * Public User details summary
**/
export class UserPublicSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classRole" })
  classRole?: ClassRolesEnum;

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

  @SpeakeasyMetadata({ data: "json, name=lastname" })
  lastname?: string;

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
  type?: UserPublicSummaryTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
