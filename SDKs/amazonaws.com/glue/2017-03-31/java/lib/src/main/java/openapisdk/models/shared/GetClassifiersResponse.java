package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetClassifiersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Classifiers")
    public Classifier[] classifiers;
    public GetClassifiersResponse withClassifiers(Classifier[] classifiers) {
        this.classifiers = classifiers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetClassifiersResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}