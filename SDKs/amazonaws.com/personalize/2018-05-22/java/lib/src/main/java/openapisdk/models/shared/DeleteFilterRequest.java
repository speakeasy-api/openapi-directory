package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteFilterRequest {
    @JsonProperty("filterArn")
    public String filterArn;
    public DeleteFilterRequest withFilterArn(String filterArn) {
        this.filterArn = filterArn;
        return this;
    }
}