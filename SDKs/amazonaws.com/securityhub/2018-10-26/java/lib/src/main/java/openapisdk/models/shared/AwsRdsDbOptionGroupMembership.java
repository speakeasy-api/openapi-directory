package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsRdsDbOptionGroupMembership
 * An option group membership.
**/
public class AwsRdsDbOptionGroupMembership {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OptionGroupName")
    public String optionGroupName;
    public AwsRdsDbOptionGroupMembership withOptionGroupName(String optionGroupName) {
        this.optionGroupName = optionGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public String status;
    public AwsRdsDbOptionGroupMembership withStatus(String status) {
        this.status = status;
        return this;
    }
}