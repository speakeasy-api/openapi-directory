package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PatientPatientFlag
 * Array of patient flag objects
**/
public class PatientPatientFlag {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archived")
    public Boolean archived;
    public PatientPatientFlag withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public String createdAt;
    public PatientPatientFlag withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flag_text")
    public String flagText;
    public PatientPatientFlag withFlagText(String flagText) {
        this.flagText = flagText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flag_type")
    public Long flagType;
    public PatientPatientFlag withFlagType(Long flagType) {
        this.flagType = flagType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public PatientPatientFlag withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_at")
    public String updatedAt;
    public PatientPatientFlag withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}