package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CommitStats {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additions")
    public Long additions;
    public CommitStats withAdditions(Long additions) {
        this.additions = additions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deletions")
    public Long deletions;
    public CommitStats withDeletions(Long deletions) {
        this.deletions = deletions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Long total;
    public CommitStats withTotal(Long total) {
        this.total = total;
        return this;
    }
}