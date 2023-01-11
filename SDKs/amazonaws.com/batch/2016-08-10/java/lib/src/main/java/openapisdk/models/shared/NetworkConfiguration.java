package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkConfiguration
 * The network configuration for jobs that are running on Fargate resources. Jobs that are running on EC2 resources must not specify this parameter.
**/
public class NetworkConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignPublicIp")
    public AssignPublicIpEnum assignPublicIp;
    public NetworkConfiguration withAssignPublicIp(AssignPublicIpEnum assignPublicIp) {
        this.assignPublicIp = assignPublicIp;
        return this;
    }
}