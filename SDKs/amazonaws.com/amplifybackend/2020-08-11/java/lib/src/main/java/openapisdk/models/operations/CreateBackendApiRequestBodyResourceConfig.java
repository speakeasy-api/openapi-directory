package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateBackendApiRequestBodyResourceConfig
 * The resource config for the data model, configured as a part of the Amplify project.
**/
public class CreateBackendApiRequestBodyResourceConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AdditionalAuthTypes")
    public java.util.Map<String, Object> additionalAuthTypes;
    public CreateBackendApiRequestBodyResourceConfig withAdditionalAuthTypes(java.util.Map<String, Object> additionalAuthTypes) {
        this.additionalAuthTypes = additionalAuthTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApiName")
    public java.util.Map<String, Object> apiName;
    public CreateBackendApiRequestBodyResourceConfig withApiName(java.util.Map<String, Object> apiName) {
        this.apiName = apiName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConflictResolution")
    public CreateBackendApiRequestBodyResourceConfigConflictResolution conflictResolution;
    public CreateBackendApiRequestBodyResourceConfig withConflictResolution(CreateBackendApiRequestBodyResourceConfigConflictResolution conflictResolution) {
        this.conflictResolution = conflictResolution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultAuthType")
    public CreateBackendApiRequestBodyResourceConfigDefaultAuthType defaultAuthType;
    public CreateBackendApiRequestBodyResourceConfig withDefaultAuthType(CreateBackendApiRequestBodyResourceConfigDefaultAuthType defaultAuthType) {
        this.defaultAuthType = defaultAuthType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Service")
    public java.util.Map<String, Object> service;
    public CreateBackendApiRequestBodyResourceConfig withService(java.util.Map<String, Object> service) {
        this.service = service;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TransformSchema")
    public java.util.Map<String, Object> transformSchema;
    public CreateBackendApiRequestBodyResourceConfig withTransformSchema(java.util.Map<String, Object> transformSchema) {
        this.transformSchema = transformSchema;
        return this;
    }
}