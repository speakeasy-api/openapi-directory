package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeEmergencyContactSettingsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmergencyContactList")
    public EmergencyContact[] emergencyContactList;
    public DescribeEmergencyContactSettingsResponse withEmergencyContactList(EmergencyContact[] emergencyContactList) {
        this.emergencyContactList = emergencyContactList;
        return this;
    }
}