package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteNamespaceRequest {
    @JsonProperty("Id")
    public String id;
    public DeleteNamespaceRequest withId(String id) {
        this.id = id;
        return this;
    }
}