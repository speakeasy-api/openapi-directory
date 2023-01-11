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
 * ConfigRuleEvaluationStatus
 * <p>Status information for your Config managed rules. The status includes information such as the last time the rule ran, the last time it failed, and the related error for the last failure.</p> <p>This action does not return status information about custom Config rules.</p>
**/
public class ConfigRuleEvaluationStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfigRuleArn")
    public String configRuleArn;
    public ConfigRuleEvaluationStatus withConfigRuleArn(String configRuleArn) {
        this.configRuleArn = configRuleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfigRuleId")
    public String configRuleId;
    public ConfigRuleEvaluationStatus withConfigRuleId(String configRuleId) {
        this.configRuleId = configRuleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfigRuleName")
    public String configRuleName;
    public ConfigRuleEvaluationStatus withConfigRuleName(String configRuleName) {
        this.configRuleName = configRuleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("FirstActivatedTime")
    public OffsetDateTime firstActivatedTime;
    public ConfigRuleEvaluationStatus withFirstActivatedTime(OffsetDateTime firstActivatedTime) {
        this.firstActivatedTime = firstActivatedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirstEvaluationStarted")
    public Boolean firstEvaluationStarted;
    public ConfigRuleEvaluationStatus withFirstEvaluationStarted(Boolean firstEvaluationStarted) {
        this.firstEvaluationStarted = firstEvaluationStarted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastDeactivatedTime")
    public OffsetDateTime lastDeactivatedTime;
    public ConfigRuleEvaluationStatus withLastDeactivatedTime(OffsetDateTime lastDeactivatedTime) {
        this.lastDeactivatedTime = lastDeactivatedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastErrorCode")
    public String lastErrorCode;
    public ConfigRuleEvaluationStatus withLastErrorCode(String lastErrorCode) {
        this.lastErrorCode = lastErrorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastErrorMessage")
    public String lastErrorMessage;
    public ConfigRuleEvaluationStatus withLastErrorMessage(String lastErrorMessage) {
        this.lastErrorMessage = lastErrorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastFailedEvaluationTime")
    public OffsetDateTime lastFailedEvaluationTime;
    public ConfigRuleEvaluationStatus withLastFailedEvaluationTime(OffsetDateTime lastFailedEvaluationTime) {
        this.lastFailedEvaluationTime = lastFailedEvaluationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastFailedInvocationTime")
    public OffsetDateTime lastFailedInvocationTime;
    public ConfigRuleEvaluationStatus withLastFailedInvocationTime(OffsetDateTime lastFailedInvocationTime) {
        this.lastFailedInvocationTime = lastFailedInvocationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastSuccessfulEvaluationTime")
    public OffsetDateTime lastSuccessfulEvaluationTime;
    public ConfigRuleEvaluationStatus withLastSuccessfulEvaluationTime(OffsetDateTime lastSuccessfulEvaluationTime) {
        this.lastSuccessfulEvaluationTime = lastSuccessfulEvaluationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastSuccessfulInvocationTime")
    public OffsetDateTime lastSuccessfulInvocationTime;
    public ConfigRuleEvaluationStatus withLastSuccessfulInvocationTime(OffsetDateTime lastSuccessfulInvocationTime) {
        this.lastSuccessfulInvocationTime = lastSuccessfulInvocationTime;
        return this;
    }
}