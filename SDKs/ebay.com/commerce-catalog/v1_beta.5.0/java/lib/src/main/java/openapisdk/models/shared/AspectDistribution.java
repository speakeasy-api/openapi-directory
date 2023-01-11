package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AspectDistribution
 * This type contains information about one category aspect that is associated with a specified category.
**/
public class AspectDistribution {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aspectValueDistributions")
    public AspectValueDistribution[] aspectValueDistributions;
    public AspectDistribution withAspectValueDistributions(AspectValueDistribution[] aspectValueDistributions) {
        this.aspectValueDistributions = aspectValueDistributions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localizedAspectName")
    public String localizedAspectName;
    public AspectDistribution withLocalizedAspectName(String localizedAspectName) {
        this.localizedAspectName = localizedAspectName;
        return this;
    }
}