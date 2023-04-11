import { SpeakeasyBase } from "../../../internal/utils";
import { UserAttributes } from "./userattributes";
/**
 * Type is resource.
 */
export declare enum UserRelationshipsHomeResourceDataTypeEnum {
    Resource = "resource"
}
export declare class UserRelationshipsHomeResourceData extends SpeakeasyBase {
    /**
     * ID of home directory resource.
     */
    id?: number;
    /**
     * Type is resource.
     */
    type?: UserRelationshipsHomeResourceDataTypeEnum;
}
export declare class UserRelationshipsHomeResource extends SpeakeasyBase {
    data?: UserRelationshipsHomeResourceData;
}
/**
 * Type is account.
 */
export declare enum UserRelationshipsOwnerAccountDataTypeEnum {
    Account = "account"
}
export declare class UserRelationshipsOwnerAccountData extends SpeakeasyBase {
    /**
     * ID of the account.
     */
    id?: number;
    /**
     * Type is account.
     */
    type?: UserRelationshipsOwnerAccountDataTypeEnum;
}
export declare class UserRelationshipsOwnerAccount extends SpeakeasyBase {
    data?: UserRelationshipsOwnerAccountData;
}
/**
 * Home resource and owner account relationship data for the user.
 */
export declare class UserRelationships extends SpeakeasyBase {
    homeResource?: UserRelationshipsHomeResource;
    ownerAccount: UserRelationshipsOwnerAccount;
}
/**
 * Object contains user properties.
 */
export declare class User extends SpeakeasyBase {
    /**
     * Attributes of the user including expiration, home directory, and permissions.
     */
    attributes?: UserAttributes;
    /**
     * ID of the user.
     */
    id?: number;
    /**
     * Home resource and owner account relationship data for the user.
     */
    relationships?: UserRelationships;
    /**
     * Type of object being returned. Always "user"
     */
    type?: string;
}
