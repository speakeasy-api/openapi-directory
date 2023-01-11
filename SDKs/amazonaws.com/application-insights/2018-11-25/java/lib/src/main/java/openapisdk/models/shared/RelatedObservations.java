package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RelatedObservations
 * Describes observations related to the problem.
**/
public class RelatedObservations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ObservationList")
    public Observation[] observationList;
    public RelatedObservations withObservationList(Observation[] observationList) {
        this.observationList = observationList;
        return this;
    }
}