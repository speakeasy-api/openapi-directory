package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateAccountAuditConfigurationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auditCheckConfigurations")
    public java.util.Map<String, openapisdk.models.shared.AuditCheckConfiguration> auditCheckConfigurations;
    public UpdateAccountAuditConfigurationRequestBody withAuditCheckConfigurations(java.util.Map<String, openapisdk.models.shared.AuditCheckConfiguration> auditCheckConfigurations) {
        this.auditCheckConfigurations = auditCheckConfigurations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auditNotificationTargetConfigurations")
    public java.util.Map<String, openapisdk.models.shared.AuditNotificationTarget> auditNotificationTargetConfigurations;
    public UpdateAccountAuditConfigurationRequestBody withAuditNotificationTargetConfigurations(java.util.Map<String, openapisdk.models.shared.AuditNotificationTarget> auditNotificationTargetConfigurations) {
        this.auditNotificationTargetConfigurations = auditNotificationTargetConfigurations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleArn")
    public String roleArn;
    public UpdateAccountAuditConfigurationRequestBody withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}