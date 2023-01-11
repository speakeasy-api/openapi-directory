package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPercentilesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentiles")
    public PercentPair[] percentiles;
    public GetPercentilesResponse withPercentiles(PercentPair[] percentiles) {
        this.percentiles = percentiles;
        return this;
    }
}