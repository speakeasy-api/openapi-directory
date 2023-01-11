package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteLocationRequest
 * DeleteLocation
**/
public class DeleteLocationRequest {
    @JsonProperty("LocationArn")
    public String locationArn;
    public DeleteLocationRequest withLocationArn(String locationArn) {
        this.locationArn = locationArn;
        return this;
    }
}