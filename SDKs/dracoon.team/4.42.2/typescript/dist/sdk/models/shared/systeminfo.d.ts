import { SpeakeasyBase } from "../../../internal/utils";
import { AuthMethod } from "./authmethod";
/**
 * System information (default language and authentication methods)
 */
export declare class SystemInfo extends SpeakeasyBase {
    /**
     * &#128679; Deprecated since v4.13.0
     *
     * @remarks
     *
     * Authentication methods:
     *
     * * `sql`
     *
     * * `active_directory`
     *
     * * `radius`
     *
     * * `openid`
     *
     * use `authData` instead
     */
    authMethods: AuthMethod[];
    /**
     * &#128679; Deprecated since v4.42.0
     *
     * @remarks
     *
     * Defines if login fields should be hidden
     */
    hideLoginInputFields: boolean;
    /**
     * System default language
     *
     * @remarks
     *
     * cf. [RFC 5646](https://tools.ietf.org/html/rfc5646)
     */
    languageDefault: string;
    /**
     * &#128640; Since v4.15.0
     *
     * @remarks
     *
     * Determines whether S3 direct upload is enforced or not
     */
    s3EnforceDirectUpload: boolean;
    /**
     * &#128640; Since v4.14.0
     *
     * @remarks
     *
     * List of S3 Hosts for CSP header
     */
    s3Hosts: string[];
    /**
     * &#128640; Since v4.21.0
     *
     * @remarks
     *
     * Defines if S3 is used as storage backend
     */
    useS3Storage: boolean;
}
