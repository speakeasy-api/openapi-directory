package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetNamespaceRequest {
    @JsonProperty("Id")
    public String id;
    public GetNamespaceRequest withId(String id) {
        this.id = id;
        return this;
    }
}