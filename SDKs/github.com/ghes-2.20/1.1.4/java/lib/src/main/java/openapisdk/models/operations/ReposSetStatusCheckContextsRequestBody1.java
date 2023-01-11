package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReposSetStatusCheckContextsRequestBody1 {
    @JsonProperty("contexts")
    public String[] contexts;
    public ReposSetStatusCheckContextsRequestBody1 withContexts(String[] contexts) {
        this.contexts = contexts;
        return this;
    }
}