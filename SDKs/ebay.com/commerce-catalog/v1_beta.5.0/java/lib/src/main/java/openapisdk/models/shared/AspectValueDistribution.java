package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AspectValueDistribution
 * This type contains information about one value of a specified aspect. This value serves as a product refinement.
**/
public class AspectValueDistribution {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localizedAspectValue")
    public String localizedAspectValue;
    public AspectValueDistribution withLocalizedAspectValue(String localizedAspectValue) {
        this.localizedAspectValue = localizedAspectValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchCount")
    public Integer matchCount;
    public AspectValueDistribution withMatchCount(Integer matchCount) {
        this.matchCount = matchCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refinementHref")
    public String refinementHref;
    public AspectValueDistribution withRefinementHref(String refinementHref) {
        this.refinementHref = refinementHref;
        return this;
    }
}