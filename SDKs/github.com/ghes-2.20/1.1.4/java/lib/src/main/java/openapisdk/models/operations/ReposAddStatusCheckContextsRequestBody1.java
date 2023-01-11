package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReposAddStatusCheckContextsRequestBody1 {
    @JsonProperty("contexts")
    public String[] contexts;
    public ReposAddStatusCheckContextsRequestBody1 withContexts(String[] contexts) {
        this.contexts = contexts;
        return this;
    }
}