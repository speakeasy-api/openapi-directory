package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkConfiguration
 * This structure specifies the network configuration for an ECS task.
**/
public class NetworkConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsvpcConfiguration")
    public AwsVpcConfiguration awsvpcConfiguration;
    public NetworkConfiguration withAwsvpcConfiguration(AwsVpcConfiguration awsvpcConfiguration) {
        this.awsvpcConfiguration = awsvpcConfiguration;
        return this;
    }
}