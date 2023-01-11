package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsCorsConfiguration
 * Contains the cross-origin resource sharing (CORS) configuration for the API. CORS is only supported for HTTP APIs.
**/
public class AwsCorsConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowCredentials")
    public Boolean allowCredentials;
    public AwsCorsConfiguration withAllowCredentials(Boolean allowCredentials) {
        this.allowCredentials = allowCredentials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowHeaders")
    public String[] allowHeaders;
    public AwsCorsConfiguration withAllowHeaders(String[] allowHeaders) {
        this.allowHeaders = allowHeaders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowMethods")
    public String[] allowMethods;
    public AwsCorsConfiguration withAllowMethods(String[] allowMethods) {
        this.allowMethods = allowMethods;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowOrigins")
    public String[] allowOrigins;
    public AwsCorsConfiguration withAllowOrigins(String[] allowOrigins) {
        this.allowOrigins = allowOrigins;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExposeHeaders")
    public String[] exposeHeaders;
    public AwsCorsConfiguration withExposeHeaders(String[] exposeHeaders) {
        this.exposeHeaders = exposeHeaders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxAge")
    public Long maxAge;
    public AwsCorsConfiguration withMaxAge(Long maxAge) {
        this.maxAge = maxAge;
        return this;
    }
}