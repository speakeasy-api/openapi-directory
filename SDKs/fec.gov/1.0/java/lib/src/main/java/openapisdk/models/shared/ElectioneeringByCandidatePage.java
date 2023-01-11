package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ElectioneeringByCandidatePage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pagination")
    public OffsetInfo pagination;
    public ElectioneeringByCandidatePage withPagination(OffsetInfo pagination) {
        this.pagination = pagination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public ElectioneeringByCandidate[] results;
    public ElectioneeringByCandidatePage withResults(ElectioneeringByCandidate[] results) {
        this.results = results;
        return this;
    }
}