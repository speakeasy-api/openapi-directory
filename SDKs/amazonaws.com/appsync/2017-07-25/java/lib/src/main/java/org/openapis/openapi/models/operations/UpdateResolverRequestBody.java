/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateResolverRequestBody {
    /**
     * The caching configuration for a resolver that has caching activated.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cachingConfig")
    public UpdateResolverRequestBodyCachingConfig cachingConfig;

    public UpdateResolverRequestBody withCachingConfig(UpdateResolverRequestBodyCachingConfig cachingConfig) {
        this.cachingConfig = cachingConfig;
        return this;
    }
    
    /**
     * The &lt;code&gt;resolver&lt;/code&gt; code that contains the request and response functions. When code is used, the &lt;code&gt;runtime&lt;/code&gt; is required. The &lt;code&gt;runtime&lt;/code&gt; value must be &lt;code&gt;APPSYNC_JS&lt;/code&gt;.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;

    public UpdateResolverRequestBody withCode(String code) {
        this.code = code;
        return this;
    }
    
    /**
     * The new data source name.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSourceName")
    public String dataSourceName;

    public UpdateResolverRequestBody withDataSourceName(String dataSourceName) {
        this.dataSourceName = dataSourceName;
        return this;
    }
    
    /**
     * &lt;p&gt;The resolver type.&lt;/p&gt; &lt;ul&gt; &lt;li&gt; &lt;p&gt; &lt;b&gt;UNIT&lt;/b&gt;: A UNIT resolver type. A UNIT resolver is the default resolver type. You can use a UNIT resolver to run a GraphQL query against a single data source.&lt;/p&gt; &lt;/li&gt; &lt;li&gt; &lt;p&gt; &lt;b&gt;PIPELINE&lt;/b&gt;: A PIPELINE resolver type. You can use a PIPELINE resolver to invoke a series of &lt;code&gt;Function&lt;/code&gt; objects in a serial manner. You can use a pipeline resolver to run a GraphQL query against multiple data sources.&lt;/p&gt; &lt;/li&gt; &lt;/ul&gt;
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public UpdateResolverRequestBodyKindEnum kind;

    public UpdateResolverRequestBody withKind(UpdateResolverRequestBodyKindEnum kind) {
        this.kind = kind;
        return this;
    }
    
    /**
     * The maximum batching size for a resolver.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxBatchSize")
    public Long maxBatchSize;

    public UpdateResolverRequestBody withMaxBatchSize(Long maxBatchSize) {
        this.maxBatchSize = maxBatchSize;
        return this;
    }
    
    /**
     * The pipeline configuration for a resolver of kind &lt;code&gt;PIPELINE&lt;/code&gt;.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pipelineConfig")
    public UpdateResolverRequestBodyPipelineConfig pipelineConfig;

    public UpdateResolverRequestBody withPipelineConfig(UpdateResolverRequestBodyPipelineConfig pipelineConfig) {
        this.pipelineConfig = pipelineConfig;
        return this;
    }
    
    /**
     * &lt;p&gt;The new request mapping template.&lt;/p&gt; &lt;p&gt;A resolver uses a request mapping template to convert a GraphQL expression into a format that a data source can understand. Mapping templates are written in Apache Velocity Template Language (VTL).&lt;/p&gt; &lt;p&gt;VTL request mapping templates are optional when using an Lambda data source. For all other data sources, VTL request and response mapping templates are required.&lt;/p&gt;
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestMappingTemplate")
    public String requestMappingTemplate;

    public UpdateResolverRequestBody withRequestMappingTemplate(String requestMappingTemplate) {
        this.requestMappingTemplate = requestMappingTemplate;
        return this;
    }
    
    /**
     * The new response mapping template.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseMappingTemplate")
    public String responseMappingTemplate;

    public UpdateResolverRequestBody withResponseMappingTemplate(String responseMappingTemplate) {
        this.responseMappingTemplate = responseMappingTemplate;
        return this;
    }
    
    /**
     * Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runtime")
    public UpdateResolverRequestBodyRuntime runtime;

    public UpdateResolverRequestBody withRuntime(UpdateResolverRequestBodyRuntime runtime) {
        this.runtime = runtime;
        return this;
    }
    
    /**
     * &lt;p&gt;Describes a Sync configuration for a resolver.&lt;/p&gt; &lt;p&gt;Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.&lt;/p&gt;
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("syncConfig")
    public UpdateResolverRequestBodySyncConfig syncConfig;

    public UpdateResolverRequestBody withSyncConfig(UpdateResolverRequestBodySyncConfig syncConfig) {
        this.syncConfig = syncConfig;
        return this;
    }
    
    public UpdateResolverRequestBody(){}
}
