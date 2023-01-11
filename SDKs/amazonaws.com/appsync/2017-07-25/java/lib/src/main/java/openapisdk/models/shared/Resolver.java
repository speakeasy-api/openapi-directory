package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Resolver
 * Describes a resolver.
**/
public class Resolver {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cachingConfig")
    public CachingConfig cachingConfig;
    public Resolver withCachingConfig(CachingConfig cachingConfig) {
        this.cachingConfig = cachingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSourceName")
    public String dataSourceName;
    public Resolver withDataSourceName(String dataSourceName) {
        this.dataSourceName = dataSourceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fieldName")
    public String fieldName;
    public Resolver withFieldName(String fieldName) {
        this.fieldName = fieldName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public ResolverKindEnum kind;
    public Resolver withKind(ResolverKindEnum kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pipelineConfig")
    public PipelineConfig pipelineConfig;
    public Resolver withPipelineConfig(PipelineConfig pipelineConfig) {
        this.pipelineConfig = pipelineConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestMappingTemplate")
    public String requestMappingTemplate;
    public Resolver withRequestMappingTemplate(String requestMappingTemplate) {
        this.requestMappingTemplate = requestMappingTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resolverArn")
    public String resolverArn;
    public Resolver withResolverArn(String resolverArn) {
        this.resolverArn = resolverArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseMappingTemplate")
    public String responseMappingTemplate;
    public Resolver withResponseMappingTemplate(String responseMappingTemplate) {
        this.responseMappingTemplate = responseMappingTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("syncConfig")
    public SyncConfig syncConfig;
    public Resolver withSyncConfig(SyncConfig syncConfig) {
        this.syncConfig = syncConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("typeName")
    public String typeName;
    public Resolver withTypeName(String typeName) {
        this.typeName = typeName;
        return this;
    }
}