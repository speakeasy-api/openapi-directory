package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AppointmentCustomVitalValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public AppointmentCustomVitalValue withValue(String value) {
        this.value = value;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vital_type")
    public Long vitalType;
    public AppointmentCustomVitalValue withVitalType(Long vitalType) {
        this.vitalType = vitalType;
        return this;
    }
}