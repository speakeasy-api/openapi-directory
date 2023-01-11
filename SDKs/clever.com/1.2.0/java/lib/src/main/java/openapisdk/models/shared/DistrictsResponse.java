package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DistrictsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public DistrictResponse[] data;
    public DistrictsResponse withData(DistrictResponse[] data) {
        this.data = data;
        return this;
    }
}