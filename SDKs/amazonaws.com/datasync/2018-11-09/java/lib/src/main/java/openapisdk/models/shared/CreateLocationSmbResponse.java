package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateLocationSmbResponse
 * CreateLocationSmbResponse
**/
public class CreateLocationSmbResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LocationArn")
    public String locationArn;
    public CreateLocationSmbResponse withLocationArn(String locationArn) {
        this.locationArn = locationArn;
        return this;
    }
}