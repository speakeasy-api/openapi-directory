package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetOperationsForResourceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageToken")
    public String pageToken;
    public GetOperationsForResourceRequest withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @JsonProperty("resourceName")
    public String resourceName;
    public GetOperationsForResourceRequest withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
}