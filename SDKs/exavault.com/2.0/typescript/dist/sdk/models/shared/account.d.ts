import { SpeakeasyBase } from "../../../internal/utils";
import { AccountAttributes } from "./accountattributes";
export declare enum AccountMasterUserMasterUserDataTypeEnum {
    User = "user"
}
export declare class AccountMasterUserMasterUserData extends SpeakeasyBase {
    /**
     * ID of master user for account
     */
    id?: number;
    type?: AccountMasterUserMasterUserDataTypeEnum;
}
export declare class AccountMasterUserMasterUser extends SpeakeasyBase {
    data?: AccountMasterUserMasterUserData;
}
export declare class AccountMasterUser extends SpeakeasyBase {
    masterUser?: AccountMasterUserMasterUser;
}
/**
 * Type of item. "account"
 */
export declare enum AccountTypeEnum {
    Account = "account"
}
/**
 * Object contains all account properties.
 */
export declare class Account extends SpeakeasyBase {
    attributes?: AccountAttributes;
    /**
     * Account ID
     */
    id?: number;
    relationships?: AccountMasterUser;
    /**
     * Type of item. "account"
     */
    type?: AccountTypeEnum;
}
