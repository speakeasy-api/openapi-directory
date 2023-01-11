package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetElectionDatesDefaultApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pagination")
    public openapisdk.models.shared.OffsetInfo pagination;
    public GetElectionDatesDefaultApplicationJson withPagination(openapisdk.models.shared.OffsetInfo pagination) {
        this.pagination = pagination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public openapisdk.models.shared.ElectionDate[] results;
    public GetElectionDatesDefaultApplicationJson withResults(openapisdk.models.shared.ElectionDate[] results) {
        this.results = results;
        return this;
    }
}