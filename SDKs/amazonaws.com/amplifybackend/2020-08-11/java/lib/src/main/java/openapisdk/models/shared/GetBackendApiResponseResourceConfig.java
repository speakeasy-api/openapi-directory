package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetBackendApiResponseResourceConfig
 * The resource configuration for this response object.
**/
public class GetBackendApiResponseResourceConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AdditionalAuthTypes")
    public java.util.Map<String, Object> additionalAuthTypes;
    public GetBackendApiResponseResourceConfig withAdditionalAuthTypes(java.util.Map<String, Object> additionalAuthTypes) {
        this.additionalAuthTypes = additionalAuthTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApiName")
    public java.util.Map<String, Object> apiName;
    public GetBackendApiResponseResourceConfig withApiName(java.util.Map<String, Object> apiName) {
        this.apiName = apiName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConflictResolution")
    public GetBackendApiResponseResourceConfigConflictResolution conflictResolution;
    public GetBackendApiResponseResourceConfig withConflictResolution(GetBackendApiResponseResourceConfigConflictResolution conflictResolution) {
        this.conflictResolution = conflictResolution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultAuthType")
    public GetBackendApiResponseResourceConfigDefaultAuthType defaultAuthType;
    public GetBackendApiResponseResourceConfig withDefaultAuthType(GetBackendApiResponseResourceConfigDefaultAuthType defaultAuthType) {
        this.defaultAuthType = defaultAuthType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Service")
    public java.util.Map<String, Object> service;
    public GetBackendApiResponseResourceConfig withService(java.util.Map<String, Object> service) {
        this.service = service;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TransformSchema")
    public java.util.Map<String, Object> transformSchema;
    public GetBackendApiResponseResourceConfig withTransformSchema(java.util.Map<String, Object> transformSchema) {
        this.transformSchema = transformSchema;
        return this;
    }
}