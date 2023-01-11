package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ClassificationInclusionRelationships {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classification")
    public ClassificationInclusionRelationshipsClassification classification;
    public ClassificationInclusionRelationships withClassification(ClassificationInclusionRelationshipsClassification classification) {
        this.classification = classification;
        return this;
    }
}