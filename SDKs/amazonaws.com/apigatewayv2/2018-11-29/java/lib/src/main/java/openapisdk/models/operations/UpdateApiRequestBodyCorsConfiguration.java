package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateApiRequestBodyCorsConfiguration
 * Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information.
**/
public class UpdateApiRequestBodyCorsConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowCredentials")
    public java.util.Map<String, Object> allowCredentials;
    public UpdateApiRequestBodyCorsConfiguration withAllowCredentials(java.util.Map<String, Object> allowCredentials) {
        this.allowCredentials = allowCredentials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowHeaders")
    public java.util.Map<String, Object> allowHeaders;
    public UpdateApiRequestBodyCorsConfiguration withAllowHeaders(java.util.Map<String, Object> allowHeaders) {
        this.allowHeaders = allowHeaders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowMethods")
    public java.util.Map<String, Object> allowMethods;
    public UpdateApiRequestBodyCorsConfiguration withAllowMethods(java.util.Map<String, Object> allowMethods) {
        this.allowMethods = allowMethods;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowOrigins")
    public java.util.Map<String, Object> allowOrigins;
    public UpdateApiRequestBodyCorsConfiguration withAllowOrigins(java.util.Map<String, Object> allowOrigins) {
        this.allowOrigins = allowOrigins;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExposeHeaders")
    public java.util.Map<String, Object> exposeHeaders;
    public UpdateApiRequestBodyCorsConfiguration withExposeHeaders(java.util.Map<String, Object> exposeHeaders) {
        this.exposeHeaders = exposeHeaders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxAge")
    public java.util.Map<String, Object> maxAge;
    public UpdateApiRequestBodyCorsConfiguration withMaxAge(java.util.Map<String, Object> maxAge) {
        this.maxAge = maxAge;
        return this;
    }
}