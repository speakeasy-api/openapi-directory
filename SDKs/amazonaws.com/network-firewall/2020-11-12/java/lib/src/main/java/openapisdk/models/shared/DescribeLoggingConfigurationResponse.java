package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeLoggingConfigurationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirewallArn")
    public String firewallArn;
    public DescribeLoggingConfigurationResponse withFirewallArn(String firewallArn) {
        this.firewallArn = firewallArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LoggingConfiguration")
    public LoggingConfiguration loggingConfiguration;
    public DescribeLoggingConfigurationResponse withLoggingConfiguration(LoggingConfiguration loggingConfiguration) {
        this.loggingConfiguration = loggingConfiguration;
        return this;
    }
}