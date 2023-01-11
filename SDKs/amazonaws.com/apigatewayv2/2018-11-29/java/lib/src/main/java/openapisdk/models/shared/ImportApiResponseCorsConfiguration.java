package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImportApiResponseCorsConfiguration
 * A CORS configuration. Supported only for HTTP APIs.
**/
public class ImportApiResponseCorsConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowCredentials")
    public java.util.Map<String, Object> allowCredentials;
    public ImportApiResponseCorsConfiguration withAllowCredentials(java.util.Map<String, Object> allowCredentials) {
        this.allowCredentials = allowCredentials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowHeaders")
    public java.util.Map<String, Object> allowHeaders;
    public ImportApiResponseCorsConfiguration withAllowHeaders(java.util.Map<String, Object> allowHeaders) {
        this.allowHeaders = allowHeaders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowMethods")
    public java.util.Map<String, Object> allowMethods;
    public ImportApiResponseCorsConfiguration withAllowMethods(java.util.Map<String, Object> allowMethods) {
        this.allowMethods = allowMethods;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowOrigins")
    public java.util.Map<String, Object> allowOrigins;
    public ImportApiResponseCorsConfiguration withAllowOrigins(java.util.Map<String, Object> allowOrigins) {
        this.allowOrigins = allowOrigins;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExposeHeaders")
    public java.util.Map<String, Object> exposeHeaders;
    public ImportApiResponseCorsConfiguration withExposeHeaders(java.util.Map<String, Object> exposeHeaders) {
        this.exposeHeaders = exposeHeaders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxAge")
    public java.util.Map<String, Object> maxAge;
    public ImportApiResponseCorsConfiguration withMaxAge(java.util.Map<String, Object> maxAge) {
        this.maxAge = maxAge;
        return this;
    }
}