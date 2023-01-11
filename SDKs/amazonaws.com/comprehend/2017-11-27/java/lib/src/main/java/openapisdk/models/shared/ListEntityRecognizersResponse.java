package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListEntityRecognizersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EntityRecognizerPropertiesList")
    public EntityRecognizerProperties[] entityRecognizerPropertiesList;
    public ListEntityRecognizersResponse withEntityRecognizerPropertiesList(EntityRecognizerProperties[] entityRecognizerPropertiesList) {
        this.entityRecognizerPropertiesList = entityRecognizerPropertiesList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListEntityRecognizersResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}