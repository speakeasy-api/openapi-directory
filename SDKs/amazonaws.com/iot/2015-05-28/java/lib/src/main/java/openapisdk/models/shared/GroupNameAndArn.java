package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GroupNameAndArn
 * The name and ARN of a group.
**/
public class GroupNameAndArn {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupArn")
    public String groupArn;
    public GroupNameAndArn withGroupArn(String groupArn) {
        this.groupArn = groupArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupName")
    public String groupName;
    public GroupNameAndArn withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
}