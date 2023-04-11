import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionKey } from "./encryptionkey";
/**
 * The output configuration properties for a batch translation job.
 */
export declare class OutputDataConfig extends SpeakeasyBase {
    /**
     * The encryption key used to encrypt this object.
     */
    encryptionKey?: EncryptionKey;
    s3Uri: string;
}
