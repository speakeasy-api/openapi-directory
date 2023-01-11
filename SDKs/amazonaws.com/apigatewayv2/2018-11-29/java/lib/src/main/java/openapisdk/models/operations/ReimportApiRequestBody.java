package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReimportApiRequestBody {
    @JsonProperty("body")
    public String body;
    public ReimportApiRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
}