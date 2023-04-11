import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AccountTokenByCodeRequestScopesEnum {
    Catalog = "Catalog",
    Commerce = "Commerce",
    Settings = "Settings",
    Playback = "Playback"
}
/**
 * The device id e.g. serial number and authorization code.
 */
export declare class AccountTokenByCodeRequest extends SpeakeasyBase {
    /**
     * The generated device authorization code.
     */
    code: string;
    /**
     * The unique identifier for the device e.g. serial number.
     */
    id: string;
    /**
     * The scope(s) of the token(s) required.
     */
    scopes: AccountTokenByCodeRequestScopesEnum[];
}
