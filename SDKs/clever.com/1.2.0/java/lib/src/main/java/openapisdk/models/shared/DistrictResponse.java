package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DistrictResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public District data;
    public DistrictResponse withData(District data) {
        this.data = data;
        return this;
    }
}