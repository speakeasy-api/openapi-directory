package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AddTagsToResourceResponse {
    @JsonProperty("Status")
    public String status;
    public AddTagsToResourceResponse withStatus(String status) {
        this.status = status;
        return this;
    }
}