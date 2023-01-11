package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostContentRequestBody {
    @JsonProperty("inputStream")
    public String inputStream;
    public PostContentRequestBody withInputStream(String inputStream) {
        this.inputStream = inputStream;
        return this;
    }
}