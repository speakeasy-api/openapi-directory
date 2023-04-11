import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the token.
 */
export declare enum AccessTokenTypeEnum {
    UserAccount = "UserAccount",
    UserProfile = "UserProfile"
}
/**
 * OK
 */
export declare class AccessToken extends SpeakeasyBase {
    /**
     * When a `UserAccount` token is issued during a single-sign-on flow
     *
     * @remarks
     * a user may have been automatically registered if they didn't
     * have an account already. If this occurs then `accountCreated`
     * will be `true`.
     *
     */
    accountCreated?: boolean;
    /**
     * The timestamp this token expires.
     */
    expirationDate: Date;
    /**
     * True if this token can be refreshed, false if not.
     */
    refreshable: boolean;
    /**
     * The type of the token.
     */
    type: AccessTokenTypeEnum;
    /**
     * The token value used for authenticated requests.
     */
    value: string;
}
