package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeRulesPackagesResponse {
    @JsonProperty("failedItems")
    public java.util.Map<String, FailedItemDetails> failedItems;
    public DescribeRulesPackagesResponse withFailedItems(java.util.Map<String, FailedItemDetails> failedItems) {
        this.failedItems = failedItems;
        return this;
    }
    @JsonProperty("rulesPackages")
    public RulesPackage[] rulesPackages;
    public DescribeRulesPackagesResponse withRulesPackages(RulesPackage[] rulesPackages) {
        this.rulesPackages = rulesPackages;
        return this;
    }
}