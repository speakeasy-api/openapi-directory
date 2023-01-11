package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeEntityRecognizerResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EntityRecognizerProperties")
    public EntityRecognizerProperties entityRecognizerProperties;
    public DescribeEntityRecognizerResponse withEntityRecognizerProperties(EntityRecognizerProperties entityRecognizerProperties) {
        this.entityRecognizerProperties = entityRecognizerProperties;
        return this;
    }
}