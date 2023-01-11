package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEc2SecurityGroupPrefixListId
 * A prefix list ID.
**/
public class AwsEc2SecurityGroupPrefixListId {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrefixListId")
    public String prefixListId;
    public AwsEc2SecurityGroupPrefixListId withPrefixListId(String prefixListId) {
        this.prefixListId = prefixListId;
        return this;
    }
}