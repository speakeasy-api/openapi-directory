package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateLocationObjectStorageResponse
 * CreateLocationObjectStorageResponse
**/
public class CreateLocationObjectStorageResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LocationArn")
    public String locationArn;
    public CreateLocationObjectStorageResponse withLocationArn(String locationArn) {
        this.locationArn = locationArn;
        return this;
    }
}