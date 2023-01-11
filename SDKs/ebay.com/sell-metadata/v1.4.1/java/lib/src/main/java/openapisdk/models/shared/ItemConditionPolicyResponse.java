package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ItemConditionPolicyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemConditionPolicies")
    public ItemConditionPolicy[] itemConditionPolicies;
    public ItemConditionPolicyResponse withItemConditionPolicies(ItemConditionPolicy[] itemConditionPolicies) {
        this.itemConditionPolicies = itemConditionPolicies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warnings")
    public Error[] warnings;
    public ItemConditionPolicyResponse withWarnings(Error[] warnings) {
        this.warnings = warnings;
        return this;
    }
}