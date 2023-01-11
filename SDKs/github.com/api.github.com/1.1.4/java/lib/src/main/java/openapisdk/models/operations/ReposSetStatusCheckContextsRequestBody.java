package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReposSetStatusCheckContextsRequestBody {
    @JsonProperty("contexts")
    public String[] contexts;
    public ReposSetStatusCheckContextsRequestBody withContexts(String[] contexts) {
        this.contexts = contexts;
        return this;
    }
}