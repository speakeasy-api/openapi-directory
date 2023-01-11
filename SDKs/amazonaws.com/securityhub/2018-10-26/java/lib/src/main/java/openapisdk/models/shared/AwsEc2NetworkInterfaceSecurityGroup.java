package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEc2NetworkInterfaceSecurityGroup
 * A security group associated with the network interface.
**/
public class AwsEc2NetworkInterfaceSecurityGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GroupId")
    public String groupId;
    public AwsEc2NetworkInterfaceSecurityGroup withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GroupName")
    public String groupName;
    public AwsEc2NetworkInterfaceSecurityGroup withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
}