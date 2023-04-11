import { SpeakeasyBase } from "../../../internal/utils";
import { Client } from "./client";
import { Details } from "./details";
import { User } from "./user";
export declare enum SignInAttemptCategoryEnum {
    Success = "success",
    CredentialsFailed = "credentials_failed",
    MfaFailed = "mfa_failed",
    ModernVersionFailed = "modern_version_failed",
    FirewallFailed = "firewall_failed",
    FirewallReportedSuccess = "firewall_reported_success"
}
export declare enum SignInAttemptTypeEnum {
    CredentialsOk = "credentials_ok",
    MfaOk = "mfa_ok",
    PasswordSecretBad = "password_secret_bad",
    MfaMissing = "mfa_missing",
    TotpDisabled = "totp_disabled",
    TotpBad = "totp_bad",
    TotpTimeout = "totp_timeout",
    U2fDisabled = "u2f_disabled",
    U2fBad = "u2f_bad",
    U2fTimout = "u2f_timout",
    DuoDisabled = "duo_disabled",
    DuoBad = "duo_bad",
    DuoTimeout = "duo_timeout",
    DuoNativeBad = "duo_native_bad",
    PlatformSecretDisabled = "platform_secret_disabled",
    PlatformSecretBad = "platform_secret_bad",
    PlatformSecretProxy = "platform_secret_proxy",
    CodeDisabled = "code_disabled",
    CodeBad = "code_bad",
    CodeTimeout = "code_timeout",
    IpBlocked = "ip_blocked",
    ContinentBlocked = "continent_blocked",
    CountryBlocked = "country_blocked",
    AnonymousBlocked = "anonymous_blocked",
    AllBlocked = "all_blocked",
    ModernVersionMissing = "modern_version_missing",
    ModernVersionOld = "modern_version_old"
}
/**
 * A single sign-in attempt object
 */
export declare class SignInAttempt extends SpeakeasyBase {
    category?: SignInAttemptCategoryEnum;
    /**
     * Metadata gathered about the client
     */
    client?: Client;
    /**
     * Country ISO Code
     */
    country?: string;
    /**
     * Additional information about the sign-in attempt
     */
    details?: Details;
    sessionUuid?: string;
    /**
     * User object
     */
    targetUser?: User;
    timestamp?: Date;
    type?: SignInAttemptTypeEnum;
    uuid?: string;
}
