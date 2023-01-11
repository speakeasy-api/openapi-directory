package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateWorldTemplateRequestBodyTemplateLocation
 * Information about a template location.
**/
public class UpdateWorldTemplateRequestBodyTemplateLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3Bucket")
    public String s3Bucket;
    public UpdateWorldTemplateRequestBodyTemplateLocation withS3Bucket(String s3Bucket) {
        this.s3Bucket = s3Bucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3Key")
    public String s3Key;
    public UpdateWorldTemplateRequestBodyTemplateLocation withS3Key(String s3Key) {
        this.s3Key = s3Key;
        return this;
    }
}