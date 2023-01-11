package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LaunchPermissionConfiguration
 * Describes the configuration for a launch permission. The launch permission modification request is sent to the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html">Amazon EC2 ModifyImageAttribute</a> API on behalf of the user for each Region they have selected to distribute the AMI. To make an AMI public, set the launch permission authorized accounts to <code>all</code>. See the examples for making an AMI public at <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html">Amazon EC2 ModifyImageAttribute</a>.
**/
public class LaunchPermissionConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userGroups")
    public String[] userGroups;
    public LaunchPermissionConfiguration withUserGroups(String[] userGroups) {
        this.userGroups = userGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userIds")
    public String[] userIds;
    public LaunchPermissionConfiguration withUserIds(String[] userIds) {
        this.userIds = userIds;
        return this;
    }
}