package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GistCommitChangeStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additions")
    public Long additions;
    public GistCommitChangeStatus withAdditions(Long additions) {
        this.additions = additions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deletions")
    public Long deletions;
    public GistCommitChangeStatus withDeletions(Long deletions) {
        this.deletions = deletions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Long total;
    public GistCommitChangeStatus withTotal(Long total) {
        this.total = total;
        return this;
    }
}