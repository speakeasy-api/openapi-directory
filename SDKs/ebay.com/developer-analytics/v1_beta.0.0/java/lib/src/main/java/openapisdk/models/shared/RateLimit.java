package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RateLimit
 * This complex types defines the resource (such as an API method) for which the rate-limit data is returned. A method is included in an API, and an API is part of an API context for the API version specified.
**/
public class RateLimit {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiContext")
    public String apiContext;
    public RateLimit withApiContext(String apiContext) {
        this.apiContext = apiContext;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiName")
    public String apiName;
    public RateLimit withApiName(String apiName) {
        this.apiName = apiName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiVersion")
    public String apiVersion;
    public RateLimit withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resources")
    public Resource[] resources;
    public RateLimit withResources(Resource[] resources) {
        this.resources = resources;
        return this;
    }
}