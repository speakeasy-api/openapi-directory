package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * S3Encryption
 * Specifies how Amazon Simple Storage Service (Amazon S3) data should be encrypted.
**/
public class S3Encryption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KmsKeyArn")
    public String kmsKeyArn;
    public S3Encryption withKmsKeyArn(String kmsKeyArn) {
        this.kmsKeyArn = kmsKeyArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3EncryptionMode")
    public S3EncryptionModeEnum s3EncryptionMode;
    public S3Encryption withS3EncryptionMode(S3EncryptionModeEnum s3EncryptionMode) {
        this.s3EncryptionMode = s3EncryptionMode;
        return this;
    }
}