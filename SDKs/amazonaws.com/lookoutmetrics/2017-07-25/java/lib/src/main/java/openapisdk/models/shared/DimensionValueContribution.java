package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DimensionValueContribution
 * The severity of a value of a dimension that contributed to an anomaly.
**/
public class DimensionValueContribution {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContributionScore")
    public Double contributionScore;
    public DimensionValueContribution withContributionScore(Double contributionScore) {
        this.contributionScore = contributionScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DimensionValue")
    public String dimensionValue;
    public DimensionValueContribution withDimensionValue(String dimensionValue) {
        this.dimensionValue = dimensionValue;
        return this;
    }
}