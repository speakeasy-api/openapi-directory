package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * S3Location
 * The location of an object in Amazon S3.
**/
public class S3Location {
    @JsonProperty("bucketArn")
    public String bucketArn;
    public S3Location withBucketArn(String bucketArn) {
        this.bucketArn = bucketArn;
        return this;
    }
    @JsonProperty("fileKey")
    public String fileKey;
    public S3Location withFileKey(String fileKey) {
        this.fileKey = fileKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectVersion")
    public String objectVersion;
    public S3Location withObjectVersion(String objectVersion) {
        this.objectVersion = objectVersion;
        return this;
    }
}