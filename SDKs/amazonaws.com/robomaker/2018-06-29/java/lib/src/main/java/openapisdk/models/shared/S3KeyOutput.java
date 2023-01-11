package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * S3KeyOutput
 * Information about S3 keys.
**/
public class S3KeyOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public S3KeyOutput withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3Key")
    public String s3Key;
    public S3KeyOutput withS3Key(String s3Key) {
        this.s3Key = s3Key;
        return this;
    }
}