package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Configuration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iamRole")
    public IamRoleConfiguration iamRole;
    public Configuration withIamRole(IamRoleConfiguration iamRole) {
        this.iamRole = iamRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kmsKey")
    public KmsKeyConfiguration kmsKey;
    public Configuration withKmsKey(KmsKeyConfiguration kmsKey) {
        this.kmsKey = kmsKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3Bucket")
    public S3BucketConfiguration s3Bucket;
    public Configuration withS3Bucket(S3BucketConfiguration s3Bucket) {
        this.s3Bucket = s3Bucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secretsManagerSecret")
    public SecretsManagerSecretConfiguration secretsManagerSecret;
    public Configuration withSecretsManagerSecret(SecretsManagerSecretConfiguration secretsManagerSecret) {
        this.secretsManagerSecret = secretsManagerSecret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sqsQueue")
    public SqsQueueConfiguration sqsQueue;
    public Configuration withSqsQueue(SqsQueueConfiguration sqsQueue) {
        this.sqsQueue = sqsQueue;
        return this;
    }
}