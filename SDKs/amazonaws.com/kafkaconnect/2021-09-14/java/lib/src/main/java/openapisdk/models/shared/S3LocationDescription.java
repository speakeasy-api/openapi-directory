package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * S3LocationDescription
 * The description of the location of an object in Amazon S3.
**/
public class S3LocationDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketArn")
    public String bucketArn;
    public S3LocationDescription withBucketArn(String bucketArn) {
        this.bucketArn = bucketArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileKey")
    public String fileKey;
    public S3LocationDescription withFileKey(String fileKey) {
        this.fileKey = fileKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectVersion")
    public String objectVersion;
    public S3LocationDescription withObjectVersion(String objectVersion) {
        this.objectVersion = objectVersion;
        return this;
    }
}