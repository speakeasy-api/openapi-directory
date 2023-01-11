package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteServiceRequest {
    @JsonProperty("Id")
    public String id;
    public DeleteServiceRequest withId(String id) {
        this.id = id;
        return this;
    }
}