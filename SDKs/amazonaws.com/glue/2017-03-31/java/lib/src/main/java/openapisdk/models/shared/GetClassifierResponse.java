package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetClassifierResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Classifier")
    public Classifier classifier;
    public GetClassifierResponse withClassifier(Classifier classifier) {
        this.classifier = classifier;
        return this;
    }
}