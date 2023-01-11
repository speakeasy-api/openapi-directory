package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DimensionKeyDetail
 * An object that describes the details for a specified dimension.
**/
public class DimensionKeyDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Dimension")
    public String dimension;
    public DimensionKeyDetail withDimension(String dimension) {
        this.dimension = dimension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public DetailStatusEnum status;
    public DimensionKeyDetail withStatus(DetailStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public String value;
    public DimensionKeyDetail withValue(String value) {
        this.value = value;
        return this;
    }
}