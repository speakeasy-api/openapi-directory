package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CampaignCriterion
 * This type defines the fields for specifying the criterion (selection rule) settings of an ad campaign.
**/
public class CampaignCriterion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoSelectFutureInventory")
    public Boolean autoSelectFutureInventory;
    public CampaignCriterion withAutoSelectFutureInventory(Boolean autoSelectFutureInventory) {
        this.autoSelectFutureInventory = autoSelectFutureInventory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("criterionType")
    public String criterionType;
    public CampaignCriterion withCriterionType(String criterionType) {
        this.criterionType = criterionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selectionRules")
    public SelectionRule[] selectionRules;
    public CampaignCriterion withSelectionRules(SelectionRule[] selectionRules) {
        this.selectionRules = selectionRules;
        return this;
    }
}