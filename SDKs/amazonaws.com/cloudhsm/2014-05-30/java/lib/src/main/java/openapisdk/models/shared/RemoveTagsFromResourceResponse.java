package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RemoveTagsFromResourceResponse {
    @JsonProperty("Status")
    public String status;
    public RemoveTagsFromResourceResponse withStatus(String status) {
        this.status = status;
        return this;
    }
}