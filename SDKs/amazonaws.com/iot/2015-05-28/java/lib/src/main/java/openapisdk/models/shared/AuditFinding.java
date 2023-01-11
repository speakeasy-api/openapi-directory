package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * AuditFinding
 * The findings (results) of the audit.
**/
public class AuditFinding {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("checkName")
    public String checkName;
    public AuditFinding withCheckName(String checkName) {
        this.checkName = checkName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("findingId")
    public String findingId;
    public AuditFinding withFindingId(String findingId) {
        this.findingId = findingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("findingTime")
    public OffsetDateTime findingTime;
    public AuditFinding withFindingTime(OffsetDateTime findingTime) {
        this.findingTime = findingTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isSuppressed")
    public Boolean isSuppressed;
    public AuditFinding withIsSuppressed(Boolean isSuppressed) {
        this.isSuppressed = isSuppressed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nonCompliantResource")
    public NonCompliantResource nonCompliantResource;
    public AuditFinding withNonCompliantResource(NonCompliantResource nonCompliantResource) {
        this.nonCompliantResource = nonCompliantResource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasonForNonCompliance")
    public String reasonForNonCompliance;
    public AuditFinding withReasonForNonCompliance(String reasonForNonCompliance) {
        this.reasonForNonCompliance = reasonForNonCompliance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reasonForNonComplianceCode")
    public String reasonForNonComplianceCode;
    public AuditFinding withReasonForNonComplianceCode(String reasonForNonComplianceCode) {
        this.reasonForNonComplianceCode = reasonForNonComplianceCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relatedResources")
    public RelatedResource[] relatedResources;
    public AuditFinding withRelatedResources(RelatedResource[] relatedResources) {
        this.relatedResources = relatedResources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public AuditFindingSeverityEnum severity;
    public AuditFinding withSeverity(AuditFindingSeverityEnum severity) {
        this.severity = severity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskId")
    public String taskId;
    public AuditFinding withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("taskStartTime")
    public OffsetDateTime taskStartTime;
    public AuditFinding withTaskStartTime(OffsetDateTime taskStartTime) {
        this.taskStartTime = taskStartTime;
        return this;
    }
}