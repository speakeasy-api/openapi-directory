package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsApiGatewayMethodSettings
 * Defines settings for a method for the stage.
**/
public class AwsApiGatewayMethodSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CacheDataEncrypted")
    public Boolean cacheDataEncrypted;
    public AwsApiGatewayMethodSettings withCacheDataEncrypted(Boolean cacheDataEncrypted) {
        this.cacheDataEncrypted = cacheDataEncrypted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CacheTtlInSeconds")
    public Long cacheTtlInSeconds;
    public AwsApiGatewayMethodSettings withCacheTtlInSeconds(Long cacheTtlInSeconds) {
        this.cacheTtlInSeconds = cacheTtlInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CachingEnabled")
    public Boolean cachingEnabled;
    public AwsApiGatewayMethodSettings withCachingEnabled(Boolean cachingEnabled) {
        this.cachingEnabled = cachingEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataTraceEnabled")
    public Boolean dataTraceEnabled;
    public AwsApiGatewayMethodSettings withDataTraceEnabled(Boolean dataTraceEnabled) {
        this.dataTraceEnabled = dataTraceEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HttpMethod")
    public String httpMethod;
    public AwsApiGatewayMethodSettings withHttpMethod(String httpMethod) {
        this.httpMethod = httpMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LoggingLevel")
    public String loggingLevel;
    public AwsApiGatewayMethodSettings withLoggingLevel(String loggingLevel) {
        this.loggingLevel = loggingLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetricsEnabled")
    public Boolean metricsEnabled;
    public AwsApiGatewayMethodSettings withMetricsEnabled(Boolean metricsEnabled) {
        this.metricsEnabled = metricsEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RequireAuthorizationForCacheControl")
    public Boolean requireAuthorizationForCacheControl;
    public AwsApiGatewayMethodSettings withRequireAuthorizationForCacheControl(Boolean requireAuthorizationForCacheControl) {
        this.requireAuthorizationForCacheControl = requireAuthorizationForCacheControl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourcePath")
    public String resourcePath;
    public AwsApiGatewayMethodSettings withResourcePath(String resourcePath) {
        this.resourcePath = resourcePath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ThrottlingBurstLimit")
    public Long throttlingBurstLimit;
    public AwsApiGatewayMethodSettings withThrottlingBurstLimit(Long throttlingBurstLimit) {
        this.throttlingBurstLimit = throttlingBurstLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ThrottlingRateLimit")
    public Double throttlingRateLimit;
    public AwsApiGatewayMethodSettings withThrottlingRateLimit(Double throttlingRateLimit) {
        this.throttlingRateLimit = throttlingRateLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UnauthorizedCacheControlHeaderStrategy")
    public String unauthorizedCacheControlHeaderStrategy;
    public AwsApiGatewayMethodSettings withUnauthorizedCacheControlHeaderStrategy(String unauthorizedCacheControlHeaderStrategy) {
        this.unauthorizedCacheControlHeaderStrategy = unauthorizedCacheControlHeaderStrategy;
        return this;
    }
}