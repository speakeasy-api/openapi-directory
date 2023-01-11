package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateLocationFsxWindowsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LocationArn")
    public String locationArn;
    public CreateLocationFsxWindowsResponse withLocationArn(String locationArn) {
        this.locationArn = locationArn;
        return this;
    }
}