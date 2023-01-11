package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeProblemObservationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RelatedObservations")
    public RelatedObservations relatedObservations;
    public DescribeProblemObservationsResponse withRelatedObservations(RelatedObservations relatedObservations) {
        this.relatedObservations = relatedObservations;
        return this;
    }
}