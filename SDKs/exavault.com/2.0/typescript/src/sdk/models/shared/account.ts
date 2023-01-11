import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountAttributes } from "./accountattributes";


export enum AccountMasterUserMasterUserDataTypeEnum {
    User = "user"
}


export class AccountMasterUserMasterUserData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: AccountMasterUserMasterUserDataTypeEnum;
}


export class AccountMasterUserMasterUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: AccountMasterUserMasterUserData;
}


export class AccountMasterUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=masterUser" })
  masterUser?: AccountMasterUserMasterUser;
}

export enum AccountTypeEnum {
    Account = "account"
}


// Account
/** 
 * Object contains all account properties.
**/
export class Account extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: AccountAttributes;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=relationships" })
  relationships?: AccountMasterUser;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: AccountTypeEnum;
}
