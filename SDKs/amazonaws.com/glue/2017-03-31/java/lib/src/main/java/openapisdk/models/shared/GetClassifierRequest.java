package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetClassifierRequest {
    @JsonProperty("Name")
    public String name;
    public GetClassifierRequest withName(String name) {
        this.name = name;
        return this;
    }
}