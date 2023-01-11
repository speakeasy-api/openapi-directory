package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteEntityRecognizerRequest {
    @JsonProperty("EntityRecognizerArn")
    public String entityRecognizerArn;
    public DeleteEntityRecognizerRequest withEntityRecognizerArn(String entityRecognizerArn) {
        this.entityRecognizerArn = entityRecognizerArn;
        return this;
    }
}