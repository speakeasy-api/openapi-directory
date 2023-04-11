import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides the identifier of the KMS key used to encrypt data indexed by Amazon Kendra. Amazon Kendra doesn't support asymmetric keys.
 */
export declare class ServerSideEncryptionConfiguration extends SpeakeasyBase {
    kmsKeyId?: string;
}
