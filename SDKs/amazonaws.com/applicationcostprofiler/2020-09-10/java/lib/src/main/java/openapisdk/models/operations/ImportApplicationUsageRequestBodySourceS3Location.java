package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImportApplicationUsageRequestBodySourceS3Location
 * Represents the Amazon Simple Storage Service (Amazon S3) location where usage data is read from.
**/
public class ImportApplicationUsageRequestBodySourceS3Location {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucket")
    public String bucket;
    public ImportApplicationUsageRequestBodySourceS3Location withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public ImportApplicationUsageRequestBodySourceS3Location withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public openapisdk.models.shared.S3BucketRegionEnum region;
    public ImportApplicationUsageRequestBodySourceS3Location withRegion(openapisdk.models.shared.S3BucketRegionEnum region) {
        this.region = region;
        return this;
    }
}