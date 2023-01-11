package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PatientCustomPatientFieldValue
 * Custom demographic values the patient has
**/
public class PatientCustomPatientFieldValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field_type")
    public Long fieldType;
    public PatientCustomPatientFieldValue withFieldType(Long fieldType) {
        this.fieldType = fieldType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_at")
    public String updatedAt;
    public PatientCustomPatientFieldValue withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public PatientCustomPatientFieldValue withValue(String value) {
        this.value = value;
        return this;
    }
}