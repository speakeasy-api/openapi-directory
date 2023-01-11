package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AssociateProactiveEngagementDetailsRequest {
    @JsonProperty("EmergencyContactList")
    public EmergencyContact[] emergencyContactList;
    public AssociateProactiveEngagementDetailsRequest withEmergencyContactList(EmergencyContact[] emergencyContactList) {
        this.emergencyContactList = emergencyContactList;
        return this;
    }
}