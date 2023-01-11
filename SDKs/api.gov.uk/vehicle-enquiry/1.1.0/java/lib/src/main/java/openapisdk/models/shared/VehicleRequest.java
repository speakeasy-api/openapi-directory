package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VehicleRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrationNumber")
    public String registrationNumber;
    public VehicleRequest withRegistrationNumber(String registrationNumber) {
        this.registrationNumber = registrationNumber;
        return this;
    }
}