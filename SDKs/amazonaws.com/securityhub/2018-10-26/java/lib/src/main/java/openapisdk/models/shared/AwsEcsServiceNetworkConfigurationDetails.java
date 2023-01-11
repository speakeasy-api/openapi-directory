package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEcsServiceNetworkConfigurationDetails
 * For tasks that use the <code>awsvpc</code> networking mode, the VPC subnet and security group configuration.
**/
public class AwsEcsServiceNetworkConfigurationDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsVpcConfiguration")
    public AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails awsVpcConfiguration;
    public AwsEcsServiceNetworkConfigurationDetails withAwsVpcConfiguration(AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails awsVpcConfiguration) {
        this.awsVpcConfiguration = awsVpcConfiguration;
        return this;
    }
}