import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserPermissions } from "./userpermissions";


export enum UserAttributesRoleEnum {
    User = "user",
    Admin = "admin",
    Master = "master"
}


// UserAttributes
/** 
 * Attributes of the user including expiration, home directory, and permissions. 
**/
export class UserAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessTimestamp" })
  accessTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=accountName" })
  accountName: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created: Date;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=expiration" })
  expiration?: string;

  @SpeakeasyMetadata({ data: "json, name=firstLogin" })
  firstLogin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=homePath" })
  homePath?: string;

  @SpeakeasyMetadata({ data: "json, name=locked" })
  locked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=modified" })
  modified: Date;

  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname: string;

  @SpeakeasyMetadata({ data: "json, name=onboarding" })
  onboarding: boolean;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions: UserPermissions;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role: UserAttributesRoleEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;
}
