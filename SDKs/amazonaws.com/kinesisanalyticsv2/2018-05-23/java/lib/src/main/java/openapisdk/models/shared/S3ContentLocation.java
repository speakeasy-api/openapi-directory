package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * S3ContentLocation
 * For a Kinesis Data Analytics application provides a description of an Amazon S3 object, including the Amazon Resource Name (ARN) of the S3 bucket, the name of the Amazon S3 object that contains the data, and the version number of the Amazon S3 object that contains the data. 
**/
public class S3ContentLocation {
    @JsonProperty("BucketARN")
    public String bucketARN;
    public S3ContentLocation withBucketArn(String bucketARN) {
        this.bucketARN = bucketARN;
        return this;
    }
    @JsonProperty("FileKey")
    public String fileKey;
    public S3ContentLocation withFileKey(String fileKey) {
        this.fileKey = fileKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ObjectVersion")
    public String objectVersion;
    public S3ContentLocation withObjectVersion(String objectVersion) {
        this.objectVersion = objectVersion;
        return this;
    }
}