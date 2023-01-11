package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContributionMatrix
 * Details about dimensions that contributed to an anomaly.
**/
public class ContributionMatrix {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DimensionContributionList")
    public DimensionContribution[] dimensionContributionList;
    public ContributionMatrix withDimensionContributionList(DimensionContribution[] dimensionContributionList) {
        this.dimensionContributionList = dimensionContributionList;
        return this;
    }
}