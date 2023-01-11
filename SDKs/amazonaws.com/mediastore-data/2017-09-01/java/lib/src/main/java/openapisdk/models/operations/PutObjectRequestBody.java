package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutObjectRequestBody {
    @JsonProperty("Body")
    public String body;
    public PutObjectRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
}