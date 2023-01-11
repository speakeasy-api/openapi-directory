package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ElectioneeringPage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pagination")
    public SeekInfo pagination;
    public ElectioneeringPage withPagination(SeekInfo pagination) {
        this.pagination = pagination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public Electioneering[] results;
    public ElectioneeringPage withResults(Electioneering[] results) {
        this.results = results;
        return this;
    }
}