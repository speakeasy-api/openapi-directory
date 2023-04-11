/**
 * The type of finding. For details about each type, see <a href="https://docs.aws.amazon.com/macie/latest/user/findings-types.html">Types of Amazon Macie findings</a> in the <i>Amazon Macie User Guide</i>. Possible values are:
 */
export declare enum FindingTypeEnum {
    SensitiveDataS3ObjectMultiple = "SensitiveData:S3Object/Multiple",
    SensitiveDataS3ObjectFinancial = "SensitiveData:S3Object/Financial",
    SensitiveDataS3ObjectPersonal = "SensitiveData:S3Object/Personal",
    SensitiveDataS3ObjectCredentials = "SensitiveData:S3Object/Credentials",
    SensitiveDataS3ObjectCustomIdentifier = "SensitiveData:S3Object/CustomIdentifier",
    PolicyIAMUserS3BucketPublic = "Policy:IAMUser/S3BucketPublic",
    PolicyIAMUserS3BucketSharedExternally = "Policy:IAMUser/S3BucketSharedExternally",
    PolicyIAMUserS3BucketReplicatedExternally = "Policy:IAMUser/S3BucketReplicatedExternally",
    PolicyIAMUserS3BucketEncryptionDisabled = "Policy:IAMUser/S3BucketEncryptionDisabled",
    PolicyIAMUserS3BlockPublicAccessDisabled = "Policy:IAMUser/S3BlockPublicAccessDisabled",
    PolicyIAMUserS3BucketSharedWithCloudFront = "Policy:IAMUser/S3BucketSharedWithCloudFront"
}
