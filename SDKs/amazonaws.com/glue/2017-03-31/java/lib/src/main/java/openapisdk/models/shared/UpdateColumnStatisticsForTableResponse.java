package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateColumnStatisticsForTableResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Errors")
    public ColumnStatisticsError[] errors;
    public UpdateColumnStatisticsForTableResponse withErrors(ColumnStatisticsError[] errors) {
        this.errors = errors;
        return this;
    }
}