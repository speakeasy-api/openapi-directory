package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDimensionKeyDetailsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Dimensions")
    public DimensionKeyDetail[] dimensions;
    public GetDimensionKeyDetailsResponse withDimensions(DimensionKeyDetail[] dimensions) {
        this.dimensions = dimensions;
        return this;
    }
}