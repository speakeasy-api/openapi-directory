package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReposAddStatusCheckContextsRequestBody {
    @JsonProperty("contexts")
    public String[] contexts;
    public ReposAddStatusCheckContextsRequestBody withContexts(String[] contexts) {
        this.contexts = contexts;
        return this;
    }
}