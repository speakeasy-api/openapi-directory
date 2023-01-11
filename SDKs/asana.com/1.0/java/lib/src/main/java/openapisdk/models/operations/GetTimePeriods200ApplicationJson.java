package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTimePeriods200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.TimePeriodCompact[] data;
    public GetTimePeriods200ApplicationJson withData(openapisdk.models.shared.TimePeriodCompact[] data) {
        this.data = data;
        return this;
    }
}