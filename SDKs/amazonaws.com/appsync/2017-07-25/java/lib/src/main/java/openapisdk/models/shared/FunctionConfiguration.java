package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FunctionConfiguration
 * A function is a reusable entity. Multiple functions can be used to compose the resolver logic.
**/
public class FunctionConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSourceName")
    public String dataSourceName;
    public FunctionConfiguration withDataSourceName(String dataSourceName) {
        this.dataSourceName = dataSourceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public FunctionConfiguration withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("functionArn")
    public String functionArn;
    public FunctionConfiguration withFunctionArn(String functionArn) {
        this.functionArn = functionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("functionId")
    public String functionId;
    public FunctionConfiguration withFunctionId(String functionId) {
        this.functionId = functionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("functionVersion")
    public String functionVersion;
    public FunctionConfiguration withFunctionVersion(String functionVersion) {
        this.functionVersion = functionVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public FunctionConfiguration withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestMappingTemplate")
    public String requestMappingTemplate;
    public FunctionConfiguration withRequestMappingTemplate(String requestMappingTemplate) {
        this.requestMappingTemplate = requestMappingTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseMappingTemplate")
    public String responseMappingTemplate;
    public FunctionConfiguration withResponseMappingTemplate(String responseMappingTemplate) {
        this.responseMappingTemplate = responseMappingTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("syncConfig")
    public SyncConfig syncConfig;
    public FunctionConfiguration withSyncConfig(SyncConfig syncConfig) {
        this.syncConfig = syncConfig;
        return this;
    }
}