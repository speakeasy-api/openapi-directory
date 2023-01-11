package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeLagsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lagId")
    public String lagId;
    public DescribeLagsRequest withLagId(String lagId) {
        this.lagId = lagId;
        return this;
    }
}