package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TagResourcesOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailedResourcesMap")
    public java.util.Map<String, FailureInfo> failedResourcesMap;
    public TagResourcesOutput withFailedResourcesMap(java.util.Map<String, FailureInfo> failedResourcesMap) {
        this.failedResourcesMap = failedResourcesMap;
        return this;
    }
}