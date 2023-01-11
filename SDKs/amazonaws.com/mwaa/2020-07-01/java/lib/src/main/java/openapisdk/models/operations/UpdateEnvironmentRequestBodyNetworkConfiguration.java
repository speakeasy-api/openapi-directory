package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateEnvironmentRequestBodyNetworkConfiguration
 * The VPC networking components used to secure and enable network traffic between the AWS resources for your environment. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html">About networking on Amazon MWAA</a>.
**/
public class UpdateEnvironmentRequestBodyNetworkConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecurityGroupIds")
    public String[] securityGroupIds;
    public UpdateEnvironmentRequestBodyNetworkConfiguration withSecurityGroupIds(String[] securityGroupIds) {
        this.securityGroupIds = securityGroupIds;
        return this;
    }
}