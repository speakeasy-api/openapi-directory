package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SetDimension
 * Specifies the dimension type and values for a segment dimension.
**/
public class SetDimension {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DimensionType")
    public DimensionTypeEnum dimensionType;
    public SetDimension withDimensionType(DimensionTypeEnum dimensionType) {
        this.dimensionType = dimensionType;
        return this;
    }
    @JsonProperty("Values")
    public String[] values;
    public SetDimension withValues(String[] values) {
        this.values = values;
        return this;
    }
}