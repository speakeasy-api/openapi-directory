package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InferenceS3OutputConfiguration
 *  Specifies configuration information for the output results from the inference, including output S3 location. 
**/
public class InferenceS3OutputConfiguration {
    @JsonProperty("Bucket")
    public String bucket;
    public InferenceS3OutputConfiguration withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Prefix")
    public String prefix;
    public InferenceS3OutputConfiguration withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
}