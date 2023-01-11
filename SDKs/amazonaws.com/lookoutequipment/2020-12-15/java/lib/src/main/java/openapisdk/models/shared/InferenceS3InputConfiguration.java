package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InferenceS3InputConfiguration
 *  Specifies configuration information for the input data for the inference, including input data S3 location. 
**/
public class InferenceS3InputConfiguration {
    @JsonProperty("Bucket")
    public String bucket;
    public InferenceS3InputConfiguration withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Prefix")
    public String prefix;
    public InferenceS3InputConfiguration withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
}