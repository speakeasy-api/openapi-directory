package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SecurityGroup
 * Contains information about a security group associated with a network interface. This data type is used as one of the elements of the <a>NetworkInterface</a> data type.
**/
public class SecurityGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupId")
    public String groupId;
    public SecurityGroup withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupName")
    public String groupName;
    public SecurityGroup withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
}