package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateResolverRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cachingConfig")
    public UpdateResolverRequestBodyCachingConfig cachingConfig;
    public UpdateResolverRequestBody withCachingConfig(UpdateResolverRequestBodyCachingConfig cachingConfig) {
        this.cachingConfig = cachingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSourceName")
    public String dataSourceName;
    public UpdateResolverRequestBody withDataSourceName(String dataSourceName) {
        this.dataSourceName = dataSourceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public UpdateResolverRequestBodyKindEnum kind;
    public UpdateResolverRequestBody withKind(UpdateResolverRequestBodyKindEnum kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pipelineConfig")
    public UpdateResolverRequestBodyPipelineConfig pipelineConfig;
    public UpdateResolverRequestBody withPipelineConfig(UpdateResolverRequestBodyPipelineConfig pipelineConfig) {
        this.pipelineConfig = pipelineConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestMappingTemplate")
    public String requestMappingTemplate;
    public UpdateResolverRequestBody withRequestMappingTemplate(String requestMappingTemplate) {
        this.requestMappingTemplate = requestMappingTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseMappingTemplate")
    public String responseMappingTemplate;
    public UpdateResolverRequestBody withResponseMappingTemplate(String responseMappingTemplate) {
        this.responseMappingTemplate = responseMappingTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("syncConfig")
    public UpdateResolverRequestBodySyncConfig syncConfig;
    public UpdateResolverRequestBody withSyncConfig(UpdateResolverRequestBodySyncConfig syncConfig) {
        this.syncConfig = syncConfig;
        return this;
    }
}