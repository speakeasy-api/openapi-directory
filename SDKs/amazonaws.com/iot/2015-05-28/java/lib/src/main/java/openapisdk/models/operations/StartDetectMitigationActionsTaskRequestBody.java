package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartDetectMitigationActionsTaskRequestBody {
    @JsonProperty("actions")
    public String[] actions;
    public StartDetectMitigationActionsTaskRequestBody withActions(String[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonProperty("clientRequestToken")
    public String clientRequestToken;
    public StartDetectMitigationActionsTaskRequestBody withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeOnlyActiveViolations")
    public Boolean includeOnlyActiveViolations;
    public StartDetectMitigationActionsTaskRequestBody withIncludeOnlyActiveViolations(Boolean includeOnlyActiveViolations) {
        this.includeOnlyActiveViolations = includeOnlyActiveViolations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeSuppressedAlerts")
    public Boolean includeSuppressedAlerts;
    public StartDetectMitigationActionsTaskRequestBody withIncludeSuppressedAlerts(Boolean includeSuppressedAlerts) {
        this.includeSuppressedAlerts = includeSuppressedAlerts;
        return this;
    }
    @JsonProperty("target")
    public StartDetectMitigationActionsTaskRequestBodyTarget target;
    public StartDetectMitigationActionsTaskRequestBody withTarget(StartDetectMitigationActionsTaskRequestBodyTarget target) {
        this.target = target;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("violationEventOccurrenceRange")
    public StartDetectMitigationActionsTaskRequestBodyViolationEventOccurrenceRange violationEventOccurrenceRange;
    public StartDetectMitigationActionsTaskRequestBody withViolationEventOccurrenceRange(StartDetectMitigationActionsTaskRequestBodyViolationEventOccurrenceRange violationEventOccurrenceRange) {
        this.violationEventOccurrenceRange = violationEventOccurrenceRange;
        return this;
    }
}