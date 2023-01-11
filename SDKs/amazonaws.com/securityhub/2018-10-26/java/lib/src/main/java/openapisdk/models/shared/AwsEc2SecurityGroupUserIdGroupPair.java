package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEc2SecurityGroupUserIdGroupPair
 * A relationship between a security group and a user.
**/
public class AwsEc2SecurityGroupUserIdGroupPair {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GroupId")
    public String groupId;
    public AwsEc2SecurityGroupUserIdGroupPair withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GroupName")
    public String groupName;
    public AwsEc2SecurityGroupUserIdGroupPair withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PeeringStatus")
    public String peeringStatus;
    public AwsEc2SecurityGroupUserIdGroupPair withPeeringStatus(String peeringStatus) {
        this.peeringStatus = peeringStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserId")
    public String userId;
    public AwsEc2SecurityGroupUserIdGroupPair withUserId(String userId) {
        this.userId = userId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcId")
    public String vpcId;
    public AwsEc2SecurityGroupUserIdGroupPair withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VpcPeeringConnectionId")
    public String vpcPeeringConnectionId;
    public AwsEc2SecurityGroupUserIdGroupPair withVpcPeeringConnectionId(String vpcPeeringConnectionId) {
        this.vpcPeeringConnectionId = vpcPeeringConnectionId;
        return this;
    }
}