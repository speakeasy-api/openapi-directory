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
 * ConformancePackEvaluationResult
 * The details of a conformance pack evaluation. Provides Config rule and Amazon Web Services resource type that was evaluated, the compliance of the conformance pack, related time stamps, and supplementary information. 
**/
public class ConformancePackEvaluationResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Annotation")
    public String annotation;
    public ConformancePackEvaluationResult withAnnotation(String annotation) {
        this.annotation = annotation;
        return this;
    }
    @JsonProperty("ComplianceType")
    public ConformancePackComplianceTypeEnum complianceType;
    public ConformancePackEvaluationResult withComplianceType(ConformancePackComplianceTypeEnum complianceType) {
        this.complianceType = complianceType;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("ConfigRuleInvokedTime")
    public OffsetDateTime configRuleInvokedTime;
    public ConformancePackEvaluationResult withConfigRuleInvokedTime(OffsetDateTime configRuleInvokedTime) {
        this.configRuleInvokedTime = configRuleInvokedTime;
        return this;
    }
    @JsonProperty("EvaluationResultIdentifier")
    public EvaluationResultIdentifier evaluationResultIdentifier;
    public ConformancePackEvaluationResult withEvaluationResultIdentifier(EvaluationResultIdentifier evaluationResultIdentifier) {
        this.evaluationResultIdentifier = evaluationResultIdentifier;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("ResultRecordedTime")
    public OffsetDateTime resultRecordedTime;
    public ConformancePackEvaluationResult withResultRecordedTime(OffsetDateTime resultRecordedTime) {
        this.resultRecordedTime = resultRecordedTime;
        return this;
    }
}