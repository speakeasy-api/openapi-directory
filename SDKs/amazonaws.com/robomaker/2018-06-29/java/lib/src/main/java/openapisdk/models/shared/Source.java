package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Source
 * Information about a source.
**/
public class Source {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("architecture")
    public ArchitectureEnum architecture;
    public Source withArchitecture(ArchitectureEnum architecture) {
        this.architecture = architecture;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public Source withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3Bucket")
    public String s3Bucket;
    public Source withS3Bucket(String s3Bucket) {
        this.s3Bucket = s3Bucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3Key")
    public String s3Key;
    public Source withS3Key(String s3Key) {
        this.s3Key = s3Key;
        return this;
    }
}