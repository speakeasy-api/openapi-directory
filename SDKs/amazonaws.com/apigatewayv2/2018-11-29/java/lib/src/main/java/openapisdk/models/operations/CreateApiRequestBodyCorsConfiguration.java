package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateApiRequestBodyCorsConfiguration
 * Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information.
**/
public class CreateApiRequestBodyCorsConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowCredentials")
    public java.util.Map<String, Object> allowCredentials;
    public CreateApiRequestBodyCorsConfiguration withAllowCredentials(java.util.Map<String, Object> allowCredentials) {
        this.allowCredentials = allowCredentials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowHeaders")
    public java.util.Map<String, Object> allowHeaders;
    public CreateApiRequestBodyCorsConfiguration withAllowHeaders(java.util.Map<String, Object> allowHeaders) {
        this.allowHeaders = allowHeaders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowMethods")
    public java.util.Map<String, Object> allowMethods;
    public CreateApiRequestBodyCorsConfiguration withAllowMethods(java.util.Map<String, Object> allowMethods) {
        this.allowMethods = allowMethods;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowOrigins")
    public java.util.Map<String, Object> allowOrigins;
    public CreateApiRequestBodyCorsConfiguration withAllowOrigins(java.util.Map<String, Object> allowOrigins) {
        this.allowOrigins = allowOrigins;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExposeHeaders")
    public java.util.Map<String, Object> exposeHeaders;
    public CreateApiRequestBodyCorsConfiguration withExposeHeaders(java.util.Map<String, Object> exposeHeaders) {
        this.exposeHeaders = exposeHeaders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxAge")
    public java.util.Map<String, Object> maxAge;
    public CreateApiRequestBodyCorsConfiguration withMaxAge(java.util.Map<String, Object> maxAge) {
        this.maxAge = maxAge;
        return this;
    }
}