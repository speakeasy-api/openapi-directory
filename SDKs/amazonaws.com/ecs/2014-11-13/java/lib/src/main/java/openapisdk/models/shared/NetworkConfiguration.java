package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkConfiguration
 * An object representing the network configuration for a task or service.
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