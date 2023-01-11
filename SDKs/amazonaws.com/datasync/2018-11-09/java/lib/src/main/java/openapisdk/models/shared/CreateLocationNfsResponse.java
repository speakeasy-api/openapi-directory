package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateLocationNfsResponse
 * CreateLocationNfsResponse
**/
public class CreateLocationNfsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LocationArn")
    public String locationArn;
    public CreateLocationNfsResponse withLocationArn(String locationArn) {
        this.locationArn = locationArn;
        return this;
    }
}