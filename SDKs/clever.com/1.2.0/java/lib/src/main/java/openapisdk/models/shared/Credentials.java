package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Credentials {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("district_username")
    public String districtUsername;
    public Credentials withDistrictUsername(String districtUsername) {
        this.districtUsername = districtUsername;
        return this;
    }
}