package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CandidatePage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pagination")
    public OffsetInfo pagination;
    public CandidatePage withPagination(OffsetInfo pagination) {
        this.pagination = pagination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public Candidate[] results;
    public CandidatePage withResults(Candidate[] results) {
        this.results = results;
        return this;
    }
}