package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeAccountAuditConfigurationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auditCheckConfigurations")
    public java.util.Map<String, AuditCheckConfiguration> auditCheckConfigurations;
    public DescribeAccountAuditConfigurationResponse withAuditCheckConfigurations(java.util.Map<String, AuditCheckConfiguration> auditCheckConfigurations) {
        this.auditCheckConfigurations = auditCheckConfigurations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auditNotificationTargetConfigurations")
    public java.util.Map<String, AuditNotificationTarget> auditNotificationTargetConfigurations;
    public DescribeAccountAuditConfigurationResponse withAuditNotificationTargetConfigurations(java.util.Map<String, AuditNotificationTarget> auditNotificationTargetConfigurations) {
        this.auditNotificationTargetConfigurations = auditNotificationTargetConfigurations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleArn")
    public String roleArn;
    public DescribeAccountAuditConfigurationResponse withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}