package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Http
 * Information about an HTTP request.
**/
public class Http {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientIp")
    public String clientIp;
    public Http withClientIp(String clientIp) {
        this.clientIp = clientIp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HttpMethod")
    public String httpMethod;
    public Http withHttpMethod(String httpMethod) {
        this.httpMethod = httpMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HttpStatus")
    public Long httpStatus;
    public Http withHttpStatus(Long httpStatus) {
        this.httpStatus = httpStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HttpURL")
    public String httpURL;
    public Http withHttpUrl(String httpURL) {
        this.httpURL = httpURL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserAgent")
    public String userAgent;
    public Http withUserAgent(String userAgent) {
        this.userAgent = userAgent;
        return this;
    }
}