package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeStackProvisioningParametersResult
 * Contains the response to a <code>DescribeStackProvisioningParameters</code> request.
**/
public class DescribeStackProvisioningParametersResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AgentInstallerUrl")
    public String agentInstallerUrl;
    public DescribeStackProvisioningParametersResult withAgentInstallerUrl(String agentInstallerUrl) {
        this.agentInstallerUrl = agentInstallerUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Parameters")
    public java.util.Map<String, String> parameters;
    public DescribeStackProvisioningParametersResult withParameters(java.util.Map<String, String> parameters) {
        this.parameters = parameters;
        return this;
    }
}