package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StopTrainingEntityRecognizerRequest {
    @JsonProperty("EntityRecognizerArn")
    public String entityRecognizerArn;
    public StopTrainingEntityRecognizerRequest withEntityRecognizerArn(String entityRecognizerArn) {
        this.entityRecognizerArn = entityRecognizerArn;
        return this;
    }
}