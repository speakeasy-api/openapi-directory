import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Create user session (log in)
 */
export declare class SessionEntity extends SpeakeasyBase {
    /**
     * Session ID
     */
    id?: string;
    /**
     * Session language
     */
    language?: string;
    /**
     * Is this session read only?
     */
    readOnly?: boolean;
    /**
     * Are insecure SFTP ciphers allowed for this user? (If this is set to true, the site administrator has signaled that it is ok to use less secure SSH ciphers for this user.)
     */
    sftpInsecureCiphers?: boolean;
}
