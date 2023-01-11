package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * S3Repository
 *  Information about a repository in an S3 bucket. 
**/
public class S3Repository {
    @JsonProperty("BucketName")
    public String bucketName;
    public S3Repository withBucketName(String bucketName) {
        this.bucketName = bucketName;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public S3Repository withName(String name) {
        this.name = name;
        return this;
    }
}