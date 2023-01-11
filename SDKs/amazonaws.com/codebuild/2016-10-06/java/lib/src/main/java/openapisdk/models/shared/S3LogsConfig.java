package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * S3LogsConfig
 *  Information about S3 logs for a build project. 
**/
public class S3LogsConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketOwnerAccess")
    public BucketOwnerAccessEnum bucketOwnerAccess;
    public S3LogsConfig withBucketOwnerAccess(BucketOwnerAccessEnum bucketOwnerAccess) {
        this.bucketOwnerAccess = bucketOwnerAccess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionDisabled")
    public Boolean encryptionDisabled;
    public S3LogsConfig withEncryptionDisabled(Boolean encryptionDisabled) {
        this.encryptionDisabled = encryptionDisabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public S3LogsConfig withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonProperty("status")
    public LogsConfigStatusTypeEnum status;
    public S3LogsConfig withStatus(LogsConfigStatusTypeEnum status) {
        this.status = status;
        return this;
    }
}