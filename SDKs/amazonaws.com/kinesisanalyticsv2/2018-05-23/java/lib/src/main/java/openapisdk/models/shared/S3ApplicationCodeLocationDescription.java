package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * S3ApplicationCodeLocationDescription
 * Describes the location of an application's code stored in an S3 bucket.
**/
public class S3ApplicationCodeLocationDescription {
    @JsonProperty("BucketARN")
    public String bucketARN;
    public S3ApplicationCodeLocationDescription withBucketArn(String bucketARN) {
        this.bucketARN = bucketARN;
        return this;
    }
    @JsonProperty("FileKey")
    public String fileKey;
    public S3ApplicationCodeLocationDescription withFileKey(String fileKey) {
        this.fileKey = fileKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ObjectVersion")
    public String objectVersion;
    public S3ApplicationCodeLocationDescription withObjectVersion(String objectVersion) {
        this.objectVersion = objectVersion;
        return this;
    }
}