package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ImportApiRequestBody {
    @JsonProperty("body")
    public String body;
    public ImportApiRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
}