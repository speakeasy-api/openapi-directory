package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AspectRecommendations
 * This type is used by the aspectsRecommendation container, which is returned if eBay has found a listing with missing or invalid item aspects (ASPECTS_ADOPTION compliance type).
**/
public class AspectRecommendations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localizedAspectName")
    public String localizedAspectName;
    public AspectRecommendations withLocalizedAspectName(String localizedAspectName) {
        this.localizedAspectName = localizedAspectName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suggestedValues")
    public String[] suggestedValues;
    public AspectRecommendations withSuggestedValues(String[] suggestedValues) {
        this.suggestedValues = suggestedValues;
        return this;
    }
}