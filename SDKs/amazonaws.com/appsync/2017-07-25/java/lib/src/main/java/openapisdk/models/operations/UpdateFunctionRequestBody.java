package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateFunctionRequestBody {
    @JsonProperty("dataSourceName")
    public String dataSourceName;
    public UpdateFunctionRequestBody withDataSourceName(String dataSourceName) {
        this.dataSourceName = dataSourceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateFunctionRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("functionVersion")
    public String functionVersion;
    public UpdateFunctionRequestBody withFunctionVersion(String functionVersion) {
        this.functionVersion = functionVersion;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public UpdateFunctionRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestMappingTemplate")
    public String requestMappingTemplate;
    public UpdateFunctionRequestBody withRequestMappingTemplate(String requestMappingTemplate) {
        this.requestMappingTemplate = requestMappingTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseMappingTemplate")
    public String responseMappingTemplate;
    public UpdateFunctionRequestBody withResponseMappingTemplate(String responseMappingTemplate) {
        this.responseMappingTemplate = responseMappingTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("syncConfig")
    public UpdateFunctionRequestBodySyncConfig syncConfig;
    public UpdateFunctionRequestBody withSyncConfig(UpdateFunctionRequestBodySyncConfig syncConfig) {
        this.syncConfig = syncConfig;
        return this;
    }
}