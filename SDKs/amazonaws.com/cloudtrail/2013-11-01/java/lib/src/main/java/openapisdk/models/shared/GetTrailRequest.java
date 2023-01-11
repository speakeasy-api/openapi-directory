package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetTrailRequest {
    @JsonProperty("Name")
    public String name;
    public GetTrailRequest withName(String name) {
        this.name = name;
        return this;
    }
}