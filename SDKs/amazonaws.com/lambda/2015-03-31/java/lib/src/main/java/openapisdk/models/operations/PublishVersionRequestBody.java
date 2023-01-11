package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PublishVersionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CodeSha256")
    public String codeSha256;
    public PublishVersionRequestBody withCodeSha256(String codeSha256) {
        this.codeSha256 = codeSha256;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public PublishVersionRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RevisionId")
    public String revisionId;
    public PublishVersionRequestBody withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
}