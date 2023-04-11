import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Create Sftp Host Key
 */
export declare class SftpHostKeyEntity extends SpeakeasyBase {
    /**
     * MD5 Fingerpint of the public key
     */
    fingerprintMd5?: string;
    /**
     * SHA256 Fingerpint of the public key
     */
    fingerprintSha256?: string;
    /**
     * Sftp Host Key ID
     */
    id?: number;
    /**
     * The friendly name of this SFTP Host Key.
     */
    name?: string;
}
