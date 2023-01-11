package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CommitteeSearchList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public CommitteeSearch[] results;
    public CommitteeSearchList withResults(CommitteeSearch[] results) {
        this.results = results;
        return this;
    }
}