package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostContentproSimilarTextRequestBody {
    @JsonProperty("text")
    public String text;
    public PostContentproSimilarTextRequestBody withText(String text) {
        this.text = text;
        return this;
    }
}