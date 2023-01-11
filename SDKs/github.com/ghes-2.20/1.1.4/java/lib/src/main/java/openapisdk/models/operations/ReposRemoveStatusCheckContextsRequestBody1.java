package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReposRemoveStatusCheckContextsRequestBody1 {
    @JsonProperty("contexts")
    public String[] contexts;
    public ReposRemoveStatusCheckContextsRequestBody1 withContexts(String[] contexts) {
        this.contexts = contexts;
        return this;
    }
}