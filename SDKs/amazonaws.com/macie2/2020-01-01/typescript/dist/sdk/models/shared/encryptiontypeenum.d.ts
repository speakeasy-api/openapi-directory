/**
 * The server-side encryption algorithm that was used to encrypt an S3 object or is used by default to encrypt objects that are added to an S3 bucket. Possible values are:
 */
export declare enum EncryptionTypeEnum {
    None = "NONE",
    Aes256 = "AES256",
    AwsKms = "aws:kms",
    Unknown = "UNKNOWN"
}
