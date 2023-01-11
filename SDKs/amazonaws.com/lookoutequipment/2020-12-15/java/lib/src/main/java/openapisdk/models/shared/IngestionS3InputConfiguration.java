package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IngestionS3InputConfiguration
 *  Specifies S3 configuration information for the input data for the data ingestion job. 
**/
public class IngestionS3InputConfiguration {
    @JsonProperty("Bucket")
    public String bucket;
    public IngestionS3InputConfiguration withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Prefix")
    public String prefix;
    public IngestionS3InputConfiguration withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
}