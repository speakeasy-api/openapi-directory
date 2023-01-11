package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListS3ResourcesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListS3ResourcesResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3Resources")
    public S3ResourceClassification[] s3Resources;
    public ListS3ResourcesResult withS3Resources(S3ResourceClassification[] s3Resources) {
        this.s3Resources = s3Resources;
        return this;
    }
}