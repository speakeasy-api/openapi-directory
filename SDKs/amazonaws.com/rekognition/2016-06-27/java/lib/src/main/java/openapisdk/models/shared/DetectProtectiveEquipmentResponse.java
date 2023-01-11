package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DetectProtectiveEquipmentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Persons")
    public ProtectiveEquipmentPerson[] persons;
    public DetectProtectiveEquipmentResponse withPersons(ProtectiveEquipmentPerson[] persons) {
        this.persons = persons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProtectiveEquipmentModelVersion")
    public String protectiveEquipmentModelVersion;
    public DetectProtectiveEquipmentResponse withProtectiveEquipmentModelVersion(String protectiveEquipmentModelVersion) {
        this.protectiveEquipmentModelVersion = protectiveEquipmentModelVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Summary")
    public ProtectiveEquipmentSummary summary;
    public DetectProtectiveEquipmentResponse withSummary(ProtectiveEquipmentSummary summary) {
        this.summary = summary;
        return this;
    }
}