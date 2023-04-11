import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The token scope required.
 */
export declare enum PaginationAuthScopeEnum {
    Catalog = "Catalog",
    Commerce = "Commerce",
    Settings = "Settings"
}
/**
 * The token type required to load the list.
 */
export declare enum PaginationAuthTypeEnum {
    UserAccount = "UserAccount",
    UserProfile = "UserProfile"
}
export declare class PaginationAuth extends SpeakeasyBase {
    /**
     * The token scope required.
     */
    scope: PaginationAuthScopeEnum;
    /**
     * The token type required to load the list.
     */
    type: PaginationAuthTypeEnum;
}
