package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StartAuditMitigationActionsTaskRequestBody {
    @JsonProperty("auditCheckToActionsMapping")
    public java.util.Map<String, String[]> auditCheckToActionsMapping;
    public StartAuditMitigationActionsTaskRequestBody withAuditCheckToActionsMapping(java.util.Map<String, String[]> auditCheckToActionsMapping) {
        this.auditCheckToActionsMapping = auditCheckToActionsMapping;
        return this;
    }
    @JsonProperty("clientRequestToken")
    public String clientRequestToken;
    public StartAuditMitigationActionsTaskRequestBody withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonProperty("target")
    public StartAuditMitigationActionsTaskRequestBodyTarget target;
    public StartAuditMitigationActionsTaskRequestBody withTarget(StartAuditMitigationActionsTaskRequestBodyTarget target) {
        this.target = target;
        return this;
    }
}