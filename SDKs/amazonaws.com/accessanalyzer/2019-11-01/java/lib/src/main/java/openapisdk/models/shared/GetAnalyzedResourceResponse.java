package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetAnalyzedResourceResponse
 * The response to the request.
**/
public class GetAnalyzedResourceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource")
    public AnalyzedResource resource;
    public GetAnalyzedResourceResponse withResource(AnalyzedResource resource) {
        this.resource = resource;
        return this;
    }
}