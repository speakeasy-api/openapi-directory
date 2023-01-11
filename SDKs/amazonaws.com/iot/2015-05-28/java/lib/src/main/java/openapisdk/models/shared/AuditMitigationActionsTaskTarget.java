package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AuditMitigationActionsTaskTarget
 * Used in MitigationActionParams, this information identifies the target findings to which the mitigation actions are applied. Only one entry appears.
**/
public class AuditMitigationActionsTaskTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auditCheckToReasonCodeFilter")
    public java.util.Map<String, String[]> auditCheckToReasonCodeFilter;
    public AuditMitigationActionsTaskTarget withAuditCheckToReasonCodeFilter(java.util.Map<String, String[]> auditCheckToReasonCodeFilter) {
        this.auditCheckToReasonCodeFilter = auditCheckToReasonCodeFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auditTaskId")
    public String auditTaskId;
    public AuditMitigationActionsTaskTarget withAuditTaskId(String auditTaskId) {
        this.auditTaskId = auditTaskId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("findingIds")
    public String[] findingIds;
    public AuditMitigationActionsTaskTarget withFindingIds(String[] findingIds) {
        this.findingIds = findingIds;
        return this;
    }
}