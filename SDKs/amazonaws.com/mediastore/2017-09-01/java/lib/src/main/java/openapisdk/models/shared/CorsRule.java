package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CorsRule
 * A rule for a CORS policy. You can add up to 100 rules to a CORS policy. If more than one rule applies, the service uses the first applicable rule listed.
**/
public class CorsRule {
    @JsonProperty("AllowedHeaders")
    public String[] allowedHeaders;
    public CorsRule withAllowedHeaders(String[] allowedHeaders) {
        this.allowedHeaders = allowedHeaders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowedMethods")
    public MethodNameEnum[] allowedMethods;
    public CorsRule withAllowedMethods(MethodNameEnum[] allowedMethods) {
        this.allowedMethods = allowedMethods;
        return this;
    }
    @JsonProperty("AllowedOrigins")
    public String[] allowedOrigins;
    public CorsRule withAllowedOrigins(String[] allowedOrigins) {
        this.allowedOrigins = allowedOrigins;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExposeHeaders")
    public String[] exposeHeaders;
    public CorsRule withExposeHeaders(String[] exposeHeaders) {
        this.exposeHeaders = exposeHeaders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxAgeSeconds")
    public Long maxAgeSeconds;
    public CorsRule withMaxAgeSeconds(Long maxAgeSeconds) {
        this.maxAgeSeconds = maxAgeSeconds;
        return this;
    }
}