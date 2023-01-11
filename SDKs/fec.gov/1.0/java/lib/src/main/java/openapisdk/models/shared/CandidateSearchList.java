package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CandidateSearchList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public CandidateSearch[] results;
    public CandidateSearchList withResults(CandidateSearch[] results) {
        this.results = results;
        return this;
    }
}