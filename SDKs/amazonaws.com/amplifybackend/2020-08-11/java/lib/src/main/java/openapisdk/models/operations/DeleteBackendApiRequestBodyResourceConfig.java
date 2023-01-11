package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteBackendApiRequestBodyResourceConfig
 * The resource config for the data model, configured as a part of the Amplify project.
**/
public class DeleteBackendApiRequestBodyResourceConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AdditionalAuthTypes")
    public java.util.Map<String, Object> additionalAuthTypes;
    public DeleteBackendApiRequestBodyResourceConfig withAdditionalAuthTypes(java.util.Map<String, Object> additionalAuthTypes) {
        this.additionalAuthTypes = additionalAuthTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApiName")
    public java.util.Map<String, Object> apiName;
    public DeleteBackendApiRequestBodyResourceConfig withApiName(java.util.Map<String, Object> apiName) {
        this.apiName = apiName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConflictResolution")
    public DeleteBackendApiRequestBodyResourceConfigConflictResolution conflictResolution;
    public DeleteBackendApiRequestBodyResourceConfig withConflictResolution(DeleteBackendApiRequestBodyResourceConfigConflictResolution conflictResolution) {
        this.conflictResolution = conflictResolution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultAuthType")
    public DeleteBackendApiRequestBodyResourceConfigDefaultAuthType defaultAuthType;
    public DeleteBackendApiRequestBodyResourceConfig withDefaultAuthType(DeleteBackendApiRequestBodyResourceConfigDefaultAuthType defaultAuthType) {
        this.defaultAuthType = defaultAuthType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Service")
    public java.util.Map<String, Object> service;
    public DeleteBackendApiRequestBodyResourceConfig withService(java.util.Map<String, Object> service) {
        this.service = service;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TransformSchema")
    public java.util.Map<String, Object> transformSchema;
    public DeleteBackendApiRequestBodyResourceConfig withTransformSchema(java.util.Map<String, Object> transformSchema) {
        this.transformSchema = transformSchema;
        return this;
    }
}