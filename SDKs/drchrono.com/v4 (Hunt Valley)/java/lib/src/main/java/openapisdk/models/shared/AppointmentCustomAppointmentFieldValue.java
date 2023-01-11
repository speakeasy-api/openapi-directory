package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AppointmentCustomAppointmentFieldValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public String createdAt;
    public AppointmentCustomAppointmentFieldValue withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field_type")
    public Long fieldType;
    public AppointmentCustomAppointmentFieldValue withFieldType(Long fieldType) {
        this.fieldType = fieldType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field_value")
    public String fieldValue;
    public AppointmentCustomAppointmentFieldValue withFieldValue(String fieldValue) {
        this.fieldValue = fieldValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_at")
    public String updatedAt;
    public AppointmentCustomAppointmentFieldValue withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}