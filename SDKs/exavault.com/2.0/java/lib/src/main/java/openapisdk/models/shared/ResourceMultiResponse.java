package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ResourceMultiResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responses")
    public Object[] responses;
    public ResourceMultiResponse withResponses(Object[] responses) {
        this.responses = responses;
        return this;
    }
}