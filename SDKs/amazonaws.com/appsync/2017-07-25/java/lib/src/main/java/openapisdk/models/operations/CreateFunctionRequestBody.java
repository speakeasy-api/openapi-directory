package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateFunctionRequestBody {
    @JsonProperty("dataSourceName")
    public String dataSourceName;
    public CreateFunctionRequestBody withDataSourceName(String dataSourceName) {
        this.dataSourceName = dataSourceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateFunctionRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("functionVersion")
    public String functionVersion;
    public CreateFunctionRequestBody withFunctionVersion(String functionVersion) {
        this.functionVersion = functionVersion;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateFunctionRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestMappingTemplate")
    public String requestMappingTemplate;
    public CreateFunctionRequestBody withRequestMappingTemplate(String requestMappingTemplate) {
        this.requestMappingTemplate = requestMappingTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseMappingTemplate")
    public String responseMappingTemplate;
    public CreateFunctionRequestBody withResponseMappingTemplate(String responseMappingTemplate) {
        this.responseMappingTemplate = responseMappingTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("syncConfig")
    public CreateFunctionRequestBodySyncConfig syncConfig;
    public CreateFunctionRequestBody withSyncConfig(CreateFunctionRequestBodySyncConfig syncConfig) {
        this.syncConfig = syncConfig;
        return this;
    }
}