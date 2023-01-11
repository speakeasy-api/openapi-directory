import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserAttributes } from "./userattributes";


export enum UserRelationshipsHomeResourceDataTypeEnum {
    Resource = "resource"
}


export class UserRelationshipsHomeResourceData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: UserRelationshipsHomeResourceDataTypeEnum;
}


export class UserRelationshipsHomeResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: UserRelationshipsHomeResourceData;
}

export enum UserRelationshipsOwnerAccountDataTypeEnum {
    Account = "account"
}


export class UserRelationshipsOwnerAccountData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: UserRelationshipsOwnerAccountDataTypeEnum;
}


export class UserRelationshipsOwnerAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: UserRelationshipsOwnerAccountData;
}


// UserRelationships
/** 
 * Home resource and owner account relationship data for the user. 
**/
export class UserRelationships extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=homeResource" })
  homeResource?: UserRelationshipsHomeResource;

  @SpeakeasyMetadata({ data: "json, name=ownerAccount" })
  ownerAccount: UserRelationshipsOwnerAccount;
}


// User
/** 
 * Object contains user properties.
**/
export class User extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: UserAttributes;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=relationships" })
  relationships?: UserRelationships;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
