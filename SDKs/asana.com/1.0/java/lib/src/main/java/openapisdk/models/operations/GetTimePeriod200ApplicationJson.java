package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTimePeriod200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.TimePeriodResponse data;
    public GetTimePeriod200ApplicationJson withData(openapisdk.models.shared.TimePeriodResponse data) {
        this.data = data;
        return this;
    }
}