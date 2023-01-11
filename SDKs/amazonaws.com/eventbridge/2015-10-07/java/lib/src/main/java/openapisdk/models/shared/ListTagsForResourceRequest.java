package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListTagsForResourceRequest {
    @JsonProperty("ResourceARN")
    public String resourceARN;
    public ListTagsForResourceRequest withResourceArn(String resourceARN) {
        this.resourceARN = resourceARN;
        return this;
    }
}