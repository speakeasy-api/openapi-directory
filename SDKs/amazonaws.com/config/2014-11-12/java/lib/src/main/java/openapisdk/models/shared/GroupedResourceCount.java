package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GroupedResourceCount
 * The count of resources that are grouped by the group name.
**/
public class GroupedResourceCount {
    @JsonProperty("GroupName")
    public String groupName;
    public GroupedResourceCount withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
    @JsonProperty("ResourceCount")
    public Long resourceCount;
    public GroupedResourceCount withResourceCount(Long resourceCount) {
        this.resourceCount = resourceCount;
        return this;
    }
}