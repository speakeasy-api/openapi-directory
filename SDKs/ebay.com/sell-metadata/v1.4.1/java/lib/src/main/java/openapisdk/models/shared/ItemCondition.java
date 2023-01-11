package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ItemCondition
 * Note: In all eBay marketplaces, Condition ID 2000 now maps to an item condition of 'Certified Refurbished', and not 'Manufacturer Refurbished'. To list an item as 'Certified Refurbished', a seller must be pre-qualified by eBay for this feature. Any seller who is not eligible for this feature will be blocked if they try to create a new listing or revise an existing listing with this item condition. Any active listings on any eBay marketplace that had 'Manufacturer Refurbished' as the item condition should have been automatically updated by eBay to the 'Seller Refurbished' item condition (Condition ID 2500). Any seller that is interested in eligibility requirements to list with 'Certified Refurbished' should see the Certified refurbished program page in Seller Center.
**/
public class ItemCondition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conditionDescription")
    public String conditionDescription;
    public ItemCondition withConditionDescription(String conditionDescription) {
        this.conditionDescription = conditionDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conditionId")
    public String conditionId;
    public ItemCondition withConditionId(String conditionId) {
        this.conditionId = conditionId;
        return this;
    }
}