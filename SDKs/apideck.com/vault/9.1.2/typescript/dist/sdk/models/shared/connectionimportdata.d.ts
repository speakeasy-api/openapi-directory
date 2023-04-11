import { SpeakeasyBase } from "../../../internal/utils";
export declare class ConnectionImportDataCredentials extends SpeakeasyBase {
    /**
     * Access token
     */
    accessToken?: string;
    /**
     * The number of seconds until the token expires. If omitted the token will be queued for refresh.
     */
    expiresIn?: number;
    /**
     * The datetime at which the token was issued. If omitted the token will be queued for refresh.
     */
    issuedAt?: Date;
    /**
     * The refresh token can be used to obtain a new access token.
     */
    refreshToken: string;
}
/**
 * Fields that need to be persisted on the resource
 */
export declare class ConnectionImportData extends SpeakeasyBase {
    credentials?: ConnectionImportDataCredentials;
    /**
     * Attach your own consumer specific metadata
     */
    metadata?: Record<string, any>;
    /**
     * Connection settings. Values will persist to `form_fields` with corresponding id
     */
    settings?: Record<string, any>;
}
