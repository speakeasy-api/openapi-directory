import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddUserHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-access-token" })
  evAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-api-key" })
  evApiKey: string;
}


// AddUserAddUserRequestBodyPermissions
/** 
 * An object containing name/value pairs for each permission. Any permission that is not passed will be set to `false` by default. Note that users will be unable to see any files in the account unless you include `list` permission.
 * When creating a user with the `role` **admin**, you should set all of the permissions to `true`
**/
export class AddUserAddUserRequestBodyPermissions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changePassword" })
  changePassword?: boolean;

  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=deleteFormData" })
  deleteFormData?: boolean;

  @SpeakeasyMetadata({ data: "json, name=download" })
  download?: boolean;

  @SpeakeasyMetadata({ data: "json, name=list" })
  list?: boolean;

  @SpeakeasyMetadata({ data: "json, name=modify" })
  modify?: boolean;

  @SpeakeasyMetadata({ data: "json, name=notification" })
  notification?: boolean;

  @SpeakeasyMetadata({ data: "json, name=share" })
  share?: boolean;

  @SpeakeasyMetadata({ data: "json, name=upload" })
  upload?: boolean;

  @SpeakeasyMetadata({ data: "json, name=viewFormData" })
  viewFormData?: boolean;
}

export enum AddUserAddUserRequestBodyRoleEnum {
    User = "user",
    Admin = "admin"
}


export class AddUserAddUserRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=expiration" })
  expiration?: string;

  @SpeakeasyMetadata({ data: "json, name=homeResource" })
  homeResource: string;

  @SpeakeasyMetadata({ data: "json, name=locked" })
  locked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname?: string;

  @SpeakeasyMetadata({ data: "json, name=onboarding" })
  onboarding?: boolean;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions: AddUserAddUserRequestBodyPermissions;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role: AddUserAddUserRequestBodyRoleEnum;

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;

  @SpeakeasyMetadata({ data: "json, name=welcomeEmail" })
  welcomeEmail?: boolean;
}


export class AddUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: AddUserHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: AddUserAddUserRequestBody;
}


export class AddUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userResponse?: shared.UserResponse;
}
