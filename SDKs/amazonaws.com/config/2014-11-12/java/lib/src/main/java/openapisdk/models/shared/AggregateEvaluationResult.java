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
 * AggregateEvaluationResult
 * The details of an Config evaluation for an account ID and region in an aggregator. Provides the Amazon Web Services resource that was evaluated, the compliance of the resource, related time stamps, and supplementary information. 
**/
public class AggregateEvaluationResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountId")
    public String accountId;
    public AggregateEvaluationResult withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Annotation")
    public String annotation;
    public AggregateEvaluationResult withAnnotation(String annotation) {
        this.annotation = annotation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsRegion")
    public String awsRegion;
    public AggregateEvaluationResult withAwsRegion(String awsRegion) {
        this.awsRegion = awsRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComplianceType")
    public ComplianceTypeEnum complianceType;
    public AggregateEvaluationResult withComplianceType(ComplianceTypeEnum complianceType) {
        this.complianceType = complianceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ConfigRuleInvokedTime")
    public OffsetDateTime configRuleInvokedTime;
    public AggregateEvaluationResult withConfigRuleInvokedTime(OffsetDateTime configRuleInvokedTime) {
        this.configRuleInvokedTime = configRuleInvokedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EvaluationResultIdentifier")
    public EvaluationResultIdentifier evaluationResultIdentifier;
    public AggregateEvaluationResult withEvaluationResultIdentifier(EvaluationResultIdentifier evaluationResultIdentifier) {
        this.evaluationResultIdentifier = evaluationResultIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ResultRecordedTime")
    public OffsetDateTime resultRecordedTime;
    public AggregateEvaluationResult withResultRecordedTime(OffsetDateTime resultRecordedTime) {
        this.resultRecordedTime = resultRecordedTime;
        return this;
    }
}