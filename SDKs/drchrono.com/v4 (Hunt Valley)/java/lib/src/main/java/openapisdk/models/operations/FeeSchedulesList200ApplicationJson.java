package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FeeSchedulesList200ApplicationJson
 * Paginated Result
**/
public class FeeSchedulesList200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.DoctorFeeSchedule[] data;
    public FeeSchedulesList200ApplicationJson withData(openapisdk.models.shared.DoctorFeeSchedule[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public FeeSchedulesList200ApplicationJson withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;
    public FeeSchedulesList200ApplicationJson withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
}