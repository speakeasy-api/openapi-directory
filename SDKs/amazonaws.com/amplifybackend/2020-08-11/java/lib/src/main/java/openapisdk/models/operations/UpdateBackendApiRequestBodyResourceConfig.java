package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateBackendApiRequestBodyResourceConfig
 * The resource config for the data model, configured as a part of the Amplify project.
**/
public class UpdateBackendApiRequestBodyResourceConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AdditionalAuthTypes")
    public java.util.Map<String, Object> additionalAuthTypes;
    public UpdateBackendApiRequestBodyResourceConfig withAdditionalAuthTypes(java.util.Map<String, Object> additionalAuthTypes) {
        this.additionalAuthTypes = additionalAuthTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApiName")
    public java.util.Map<String, Object> apiName;
    public UpdateBackendApiRequestBodyResourceConfig withApiName(java.util.Map<String, Object> apiName) {
        this.apiName = apiName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConflictResolution")
    public UpdateBackendApiRequestBodyResourceConfigConflictResolution conflictResolution;
    public UpdateBackendApiRequestBodyResourceConfig withConflictResolution(UpdateBackendApiRequestBodyResourceConfigConflictResolution conflictResolution) {
        this.conflictResolution = conflictResolution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultAuthType")
    public UpdateBackendApiRequestBodyResourceConfigDefaultAuthType defaultAuthType;
    public UpdateBackendApiRequestBodyResourceConfig withDefaultAuthType(UpdateBackendApiRequestBodyResourceConfigDefaultAuthType defaultAuthType) {
        this.defaultAuthType = defaultAuthType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Service")
    public java.util.Map<String, Object> service;
    public UpdateBackendApiRequestBodyResourceConfig withService(java.util.Map<String, Object> service) {
        this.service = service;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TransformSchema")
    public java.util.Map<String, Object> transformSchema;
    public UpdateBackendApiRequestBodyResourceConfig withTransformSchema(java.util.Map<String, Object> transformSchema) {
        this.transformSchema = transformSchema;
        return this;
    }
}