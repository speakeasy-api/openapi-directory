import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object represents API user in CallFire system. Use /me/api/credentials endpoint to manage API users on your account
 */
export declare class ApiCredential extends SpeakeasyBase {
    /**
     * Is credential enabled
     */
    enabled?: boolean;
    /**
     * An id of an API credential
     */
    id?: number;
    /**
     * A name of an API credential
     */
    name?: string;
    /**
     * A password for credential
     */
    password?: string;
    /**
     * Username for credential
     */
    username?: string;
}
/**
 * An object represents API user in CallFire system. Use /me/api/credentials endpoint to manage API users on your account
 */
export declare class ApiCredentialInput extends SpeakeasyBase {
    /**
     * Is credential enabled
     */
    enabled?: boolean;
    /**
     * An id of an API credential
     */
    id?: number;
    /**
     * A name of an API credential
     */
    name?: string;
}
