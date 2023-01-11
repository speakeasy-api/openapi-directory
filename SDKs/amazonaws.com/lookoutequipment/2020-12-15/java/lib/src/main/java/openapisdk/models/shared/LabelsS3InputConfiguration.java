package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LabelsS3InputConfiguration
 * The location information (prefix and bucket name) for the s3 location being used for label data. 
**/
public class LabelsS3InputConfiguration {
    @JsonProperty("Bucket")
    public String bucket;
    public LabelsS3InputConfiguration withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Prefix")
    public String prefix;
    public LabelsS3InputConfiguration withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
}