package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ArticleConfidentiality {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_confidential")
    public Boolean isConfidential;
    public ArticleConfidentiality withIsConfidential(Boolean isConfidential) {
        this.isConfidential = isConfidential;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public ArticleConfidentiality withReason(String reason) {
        this.reason = reason;
        return this;
    }
}