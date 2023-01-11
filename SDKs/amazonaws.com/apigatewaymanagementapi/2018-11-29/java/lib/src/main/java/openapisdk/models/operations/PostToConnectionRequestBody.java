package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostToConnectionRequestBody {
    @JsonProperty("Data")
    public String data;
    public PostToConnectionRequestBody withData(String data) {
        this.data = data;
        return this;
    }
}