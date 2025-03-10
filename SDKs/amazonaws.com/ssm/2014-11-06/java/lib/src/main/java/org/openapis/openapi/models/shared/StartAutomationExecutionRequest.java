/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class StartAutomationExecutionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AlarmConfiguration")
    public AlarmConfiguration alarmConfiguration;

    public StartAutomationExecutionRequest withAlarmConfiguration(AlarmConfiguration alarmConfiguration) {
        this.alarmConfiguration = alarmConfiguration;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientToken")
    public String clientToken;

    public StartAutomationExecutionRequest withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    
    @JsonProperty("DocumentName")
    public String documentName;

    public StartAutomationExecutionRequest withDocumentName(String documentName) {
        this.documentName = documentName;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DocumentVersion")
    public String documentVersion;

    public StartAutomationExecutionRequest withDocumentVersion(String documentVersion) {
        this.documentVersion = documentVersion;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxConcurrency")
    public String maxConcurrency;

    public StartAutomationExecutionRequest withMaxConcurrency(String maxConcurrency) {
        this.maxConcurrency = maxConcurrency;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxErrors")
    public String maxErrors;

    public StartAutomationExecutionRequest withMaxErrors(String maxErrors) {
        this.maxErrors = maxErrors;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Mode")
    public ExecutionModeEnum mode;

    public StartAutomationExecutionRequest withMode(ExecutionModeEnum mode) {
        this.mode = mode;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Parameters")
    public java.util.Map<String, String[]> parameters;

    public StartAutomationExecutionRequest withParameters(java.util.Map<String, String[]> parameters) {
        this.parameters = parameters;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;

    public StartAutomationExecutionRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetLocations")
    public TargetLocation[] targetLocations;

    public StartAutomationExecutionRequest withTargetLocations(TargetLocation[] targetLocations) {
        this.targetLocations = targetLocations;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetMaps")
    public java.util.Map<String, String[]>[] targetMaps;

    public StartAutomationExecutionRequest withTargetMaps(java.util.Map<String, String[]>[] targetMaps) {
        this.targetMaps = targetMaps;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetParameterName")
    public String targetParameterName;

    public StartAutomationExecutionRequest withTargetParameterName(String targetParameterName) {
        this.targetParameterName = targetParameterName;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Targets")
    public Target[] targets;

    public StartAutomationExecutionRequest withTargets(Target[] targets) {
        this.targets = targets;
        return this;
    }
    
    public StartAutomationExecutionRequest(@JsonProperty("DocumentName") String documentName) {
        this.documentName = documentName;
  }
}
