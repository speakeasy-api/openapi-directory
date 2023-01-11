package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OutputLocation
 * The output location.
**/
public class OutputLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3Bucket")
    public String s3Bucket;
    public OutputLocation withS3Bucket(String s3Bucket) {
        this.s3Bucket = s3Bucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3Prefix")
    public String s3Prefix;
    public OutputLocation withS3Prefix(String s3Prefix) {
        this.s3Prefix = s3Prefix;
        return this;
    }
}