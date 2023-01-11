package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RemoteAccessConfig
 * An object representing the remote access configuration for the managed node group.
**/
public class RemoteAccessConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ec2SshKey")
    public String ec2SshKey;
    public RemoteAccessConfig withEc2SshKey(String ec2SshKey) {
        this.ec2SshKey = ec2SshKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceSecurityGroups")
    public String[] sourceSecurityGroups;
    public RemoteAccessConfig withSourceSecurityGroups(String[] sourceSecurityGroups) {
        this.sourceSecurityGroups = sourceSecurityGroups;
        return this;
    }
}