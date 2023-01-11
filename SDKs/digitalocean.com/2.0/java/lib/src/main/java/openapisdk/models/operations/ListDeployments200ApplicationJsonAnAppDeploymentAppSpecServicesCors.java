package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCors {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_credentials")
    public Boolean allowCredentials;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCors withAllowCredentials(Boolean allowCredentials) {
        this.allowCredentials = allowCredentials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_headers")
    public String[] allowHeaders;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCors withAllowHeaders(String[] allowHeaders) {
        this.allowHeaders = allowHeaders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_methods")
    public String[] allowMethods;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCors withAllowMethods(String[] allowMethods) {
        this.allowMethods = allowMethods;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_origins")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCorsAllowOrigins[] allowOrigins;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCors withAllowOrigins(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCorsAllowOrigins[] allowOrigins) {
        this.allowOrigins = allowOrigins;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expose_headers")
    public String[] exposeHeaders;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCors withExposeHeaders(String[] exposeHeaders) {
        this.exposeHeaders = exposeHeaders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max_age")
    public String maxAge;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServicesCors withMaxAge(String maxAge) {
        this.maxAge = maxAge;
        return this;
    }
}