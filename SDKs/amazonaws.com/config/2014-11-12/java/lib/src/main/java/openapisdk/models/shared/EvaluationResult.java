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
 * EvaluationResult
 * The details of an Config evaluation. Provides the Amazon Web Services resource that was evaluated, the compliance of the resource, related time stamps, and supplementary information.
**/
public class EvaluationResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Annotation")
    public String annotation;
    public EvaluationResult withAnnotation(String annotation) {
        this.annotation = annotation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComplianceType")
    public ComplianceTypeEnum complianceType;
    public EvaluationResult withComplianceType(ComplianceTypeEnum complianceType) {
        this.complianceType = complianceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ConfigRuleInvokedTime")
    public OffsetDateTime configRuleInvokedTime;
    public EvaluationResult withConfigRuleInvokedTime(OffsetDateTime configRuleInvokedTime) {
        this.configRuleInvokedTime = configRuleInvokedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EvaluationResultIdentifier")
    public EvaluationResultIdentifier evaluationResultIdentifier;
    public EvaluationResult withEvaluationResultIdentifier(EvaluationResultIdentifier evaluationResultIdentifier) {
        this.evaluationResultIdentifier = evaluationResultIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ResultRecordedTime")
    public OffsetDateTime resultRecordedTime;
    public EvaluationResult withResultRecordedTime(OffsetDateTime resultRecordedTime) {
        this.resultRecordedTime = resultRecordedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResultToken")
    public String resultToken;
    public EvaluationResult withResultToken(String resultToken) {
        this.resultToken = resultToken;
        return this;
    }
}