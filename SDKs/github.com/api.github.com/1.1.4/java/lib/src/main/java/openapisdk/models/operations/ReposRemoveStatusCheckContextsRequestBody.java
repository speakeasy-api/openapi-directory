package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReposRemoveStatusCheckContextsRequestBody {
    @JsonProperty("contexts")
    public String[] contexts;
    public ReposRemoveStatusCheckContextsRequestBody withContexts(String[] contexts) {
        this.contexts = contexts;
        return this;
    }
}