package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCardinalityResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cardinality")
    public Long cardinality;
    public GetCardinalityResponse withCardinality(Long cardinality) {
        this.cardinality = cardinality;
        return this;
    }
}