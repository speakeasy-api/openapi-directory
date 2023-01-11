package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetReportingDatesDefaultApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pagination")
    public openapisdk.models.shared.OffsetInfo pagination;
    public GetReportingDatesDefaultApplicationJson withPagination(openapisdk.models.shared.OffsetInfo pagination) {
        this.pagination = pagination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public openapisdk.models.shared.ReportDate[] results;
    public GetReportingDatesDefaultApplicationJson withResults(openapisdk.models.shared.ReportDate[] results) {
        this.results = results;
        return this;
    }
}