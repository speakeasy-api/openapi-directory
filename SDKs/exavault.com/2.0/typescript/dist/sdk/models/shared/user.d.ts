import { SpeakeasyBase } from "../../../internal/utils";
import { UserAttributes } from "./userattributes";
export declare enum UserRelationshipsHomeResourceDataTypeEnum {
    Resource = "resource"
}
export declare class UserRelationshipsHomeResourceData extends SpeakeasyBase {
    id?: number;
    type?: UserRelationshipsHomeResourceDataTypeEnum;
}
export declare class UserRelationshipsHomeResource extends SpeakeasyBase {
    data?: UserRelationshipsHomeResourceData;
}
export declare enum UserRelationshipsOwnerAccountDataTypeEnum {
    Account = "account"
}
export declare class UserRelationshipsOwnerAccountData extends SpeakeasyBase {
    id?: number;
    type?: UserRelationshipsOwnerAccountDataTypeEnum;
}
export declare class UserRelationshipsOwnerAccount extends SpeakeasyBase {
    data?: UserRelationshipsOwnerAccountData;
}
/**
 * Home resource and owner account relationship data for the user.
**/
export declare class UserRelationships extends SpeakeasyBase {
    homeResource?: UserRelationshipsHomeResource;
    ownerAccount: UserRelationshipsOwnerAccount;
}
/**
 * Object contains user properties.
**/
export declare class User extends SpeakeasyBase {
    attributes?: UserAttributes;
    id?: number;
    relationships?: UserRelationships;
    type?: string;
}
