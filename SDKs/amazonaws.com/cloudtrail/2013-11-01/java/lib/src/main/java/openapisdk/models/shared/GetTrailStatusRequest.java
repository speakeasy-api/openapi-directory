package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetTrailStatusRequest
 * The name of a trail about which you want the current status.
**/
public class GetTrailStatusRequest {
    @JsonProperty("Name")
    public String name;
    public GetTrailStatusRequest withName(String name) {
        this.name = name;
        return this;
    }
}