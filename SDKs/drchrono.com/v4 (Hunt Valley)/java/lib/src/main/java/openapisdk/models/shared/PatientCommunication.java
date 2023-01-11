package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PatientCommunication {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public PatientCommunication withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code_system")
    public String codeSystem;
    public PatientCommunication withCodeSystem(String codeSystem) {
        this.codeSystem = codeSystem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public String createdAt;
    public PatientCommunication withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("doctor")
    public Long doctor;
    public PatientCommunication withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effective_time")
    public String effectiveTime;
    public PatientCommunication withEffectiveTime(String effectiveTime) {
        this.effectiveTime = effectiveTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public PatientCommunication withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PatientCommunication withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("patient")
    public Long patient;
    public PatientCommunication withPatient(Long patient) {
        this.patient = patient;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value_code")
    public String valueCode;
    public PatientCommunication withValueCode(String valueCode) {
        this.valueCode = valueCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value_code_system")
    public String valueCodeSystem;
    public PatientCommunication withValueCodeSystem(String valueCodeSystem) {
        this.valueCodeSystem = valueCodeSystem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value_name")
    public String valueName;
    public PatientCommunication withValueName(String valueName) {
        this.valueName = valueName;
        return this;
    }
}