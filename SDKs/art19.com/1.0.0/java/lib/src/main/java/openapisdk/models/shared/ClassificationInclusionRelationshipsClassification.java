package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ClassificationInclusionRelationshipsClassification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ResourceIdentifier data;
    public ClassificationInclusionRelationshipsClassification withData(ResourceIdentifier data) {
        this.data = data;
        return this;
    }
}