package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetServiceRequest {
    @JsonProperty("Id")
    public String id;
    public GetServiceRequest withId(String id) {
        this.id = id;
        return this;
    }
}