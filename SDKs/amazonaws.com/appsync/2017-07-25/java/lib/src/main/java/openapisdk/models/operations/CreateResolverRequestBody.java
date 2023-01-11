package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateResolverRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cachingConfig")
    public CreateResolverRequestBodyCachingConfig cachingConfig;
    public CreateResolverRequestBody withCachingConfig(CreateResolverRequestBodyCachingConfig cachingConfig) {
        this.cachingConfig = cachingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSourceName")
    public String dataSourceName;
    public CreateResolverRequestBody withDataSourceName(String dataSourceName) {
        this.dataSourceName = dataSourceName;
        return this;
    }
    @JsonProperty("fieldName")
    public String fieldName;
    public CreateResolverRequestBody withFieldName(String fieldName) {
        this.fieldName = fieldName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public CreateResolverRequestBodyKindEnum kind;
    public CreateResolverRequestBody withKind(CreateResolverRequestBodyKindEnum kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pipelineConfig")
    public CreateResolverRequestBodyPipelineConfig pipelineConfig;
    public CreateResolverRequestBody withPipelineConfig(CreateResolverRequestBodyPipelineConfig pipelineConfig) {
        this.pipelineConfig = pipelineConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestMappingTemplate")
    public String requestMappingTemplate;
    public CreateResolverRequestBody withRequestMappingTemplate(String requestMappingTemplate) {
        this.requestMappingTemplate = requestMappingTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseMappingTemplate")
    public String responseMappingTemplate;
    public CreateResolverRequestBody withResponseMappingTemplate(String responseMappingTemplate) {
        this.responseMappingTemplate = responseMappingTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("syncConfig")
    public CreateResolverRequestBodySyncConfig syncConfig;
    public CreateResolverRequestBody withSyncConfig(CreateResolverRequestBodySyncConfig syncConfig) {
        this.syncConfig = syncConfig;
        return this;
    }
}