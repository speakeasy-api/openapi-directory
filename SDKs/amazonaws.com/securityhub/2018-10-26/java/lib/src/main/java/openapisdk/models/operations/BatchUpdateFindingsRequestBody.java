package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchUpdateFindingsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Confidence")
    public Long confidence;
    public BatchUpdateFindingsRequestBody withConfidence(Long confidence) {
        this.confidence = confidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Criticality")
    public Long criticality;
    public BatchUpdateFindingsRequestBody withCriticality(Long criticality) {
        this.criticality = criticality;
        return this;
    }
    @JsonProperty("FindingIdentifiers")
    public openapisdk.models.shared.AwsSecurityFindingIdentifier[] findingIdentifiers;
    public BatchUpdateFindingsRequestBody withFindingIdentifiers(openapisdk.models.shared.AwsSecurityFindingIdentifier[] findingIdentifiers) {
        this.findingIdentifiers = findingIdentifiers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Note")
    public BatchUpdateFindingsRequestBodyNote note;
    public BatchUpdateFindingsRequestBody withNote(BatchUpdateFindingsRequestBodyNote note) {
        this.note = note;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RelatedFindings")
    public openapisdk.models.shared.RelatedFinding[] relatedFindings;
    public BatchUpdateFindingsRequestBody withRelatedFindings(openapisdk.models.shared.RelatedFinding[] relatedFindings) {
        this.relatedFindings = relatedFindings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Severity")
    public BatchUpdateFindingsRequestBodySeverity severity;
    public BatchUpdateFindingsRequestBody withSeverity(BatchUpdateFindingsRequestBodySeverity severity) {
        this.severity = severity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Types")
    public String[] types;
    public BatchUpdateFindingsRequestBody withTypes(String[] types) {
        this.types = types;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserDefinedFields")
    public java.util.Map<String, String> userDefinedFields;
    public BatchUpdateFindingsRequestBody withUserDefinedFields(java.util.Map<String, String> userDefinedFields) {
        this.userDefinedFields = userDefinedFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VerificationState")
    public BatchUpdateFindingsRequestBodyVerificationStateEnum verificationState;
    public BatchUpdateFindingsRequestBody withVerificationState(BatchUpdateFindingsRequestBodyVerificationStateEnum verificationState) {
        this.verificationState = verificationState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Workflow")
    public BatchUpdateFindingsRequestBodyWorkflow workflow;
    public BatchUpdateFindingsRequestBody withWorkflow(BatchUpdateFindingsRequestBodyWorkflow workflow) {
        this.workflow = workflow;
        return this;
    }
}