package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GroupOwnerSetting
 * Group owner related settings for local resources.
**/
public class GroupOwnerSetting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoAddGroupOwner")
    public Boolean autoAddGroupOwner;
    public GroupOwnerSetting withAutoAddGroupOwner(Boolean autoAddGroupOwner) {
        this.autoAddGroupOwner = autoAddGroupOwner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GroupOwner")
    public String groupOwner;
    public GroupOwnerSetting withGroupOwner(String groupOwner) {
        this.groupOwner = groupOwner;
        return this;
    }
}