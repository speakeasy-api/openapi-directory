package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PackageSpecification
 * This complex type specifies the dimensions and weight of a package.
**/
public class PackageSpecification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensions")
    public Dimensions dimensions;
    public PackageSpecification withDimensions(Dimensions dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weight")
    public Weight weight;
    public PackageSpecification withWeight(Weight weight) {
        this.weight = weight;
        return this;
    }
}