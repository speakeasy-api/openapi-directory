package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeEntityRecognizerRequest {
    @JsonProperty("EntityRecognizerArn")
    public String entityRecognizerArn;
    public DescribeEntityRecognizerRequest withEntityRecognizerArn(String entityRecognizerArn) {
        this.entityRecognizerArn = entityRecognizerArn;
        return this;
    }
}