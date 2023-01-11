package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSchedulesScheduleDDefaultApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pagination")
    public openapisdk.models.shared.OffsetInfo pagination;
    public GetSchedulesScheduleDDefaultApplicationJson withPagination(openapisdk.models.shared.OffsetInfo pagination) {
        this.pagination = pagination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public GetSchedulesScheduleDDefaultApplicationJsonResults[] results;
    public GetSchedulesScheduleDDefaultApplicationJson withResults(GetSchedulesScheduleDDefaultApplicationJsonResults[] results) {
        this.results = results;
        return this;
    }
}