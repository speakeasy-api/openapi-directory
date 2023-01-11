package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DistrictStatusResponses {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public DistrictStatusResponse[] data;
    public DistrictStatusResponses withData(DistrictStatusResponse[] data) {
        this.data = data;
        return this;
    }
}