package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostImageActionRequestBody1 {
    @JsonProperty("type")
    public PostImageActionRequestBody1TypeEnum type;
    public PostImageActionRequestBody1 withType(PostImageActionRequestBody1TypeEnum type) {
        this.type = type;
        return this;
    }
}