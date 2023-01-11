package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Refinement
 * This type identifies a product category and the aspects associated with that category. Each aspect distribution container returns the distribution of values that have been used for the aspect.
**/
public class Refinement {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aspectDistributions")
    public AspectDistribution[] aspectDistributions;
    public Refinement withAspectDistributions(AspectDistribution[] aspectDistributions) {
        this.aspectDistributions = aspectDistributions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dominantCategoryId")
    public String dominantCategoryId;
    public Refinement withDominantCategoryId(String dominantCategoryId) {
        this.dominantCategoryId = dominantCategoryId;
        return this;
    }
}