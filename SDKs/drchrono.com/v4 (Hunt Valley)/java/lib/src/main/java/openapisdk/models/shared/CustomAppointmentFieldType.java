package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CustomAppointmentFieldType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archived")
    public Boolean archived;
    public CustomAppointmentFieldType withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public String createdAt;
    public CustomAppointmentFieldType withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doctor")
    public String doctor;
    public CustomAppointmentFieldType withDoctor(String doctor) {
        this.doctor = doctor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field_desc")
    public String fieldDesc;
    public CustomAppointmentFieldType withFieldDesc(String fieldDesc) {
        this.fieldDesc = fieldDesc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field_name")
    public String fieldName;
    public CustomAppointmentFieldType withFieldName(String fieldName) {
        this.fieldName = fieldName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public CustomAppointmentFieldType withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order")
    public Long order;
    public CustomAppointmentFieldType withOrder(Long order) {
        this.order = order;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_at")
    public String updatedAt;
    public CustomAppointmentFieldType withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}