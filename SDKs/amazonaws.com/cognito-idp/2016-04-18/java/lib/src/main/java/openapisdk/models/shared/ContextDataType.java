package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContextDataType
 * Contextual user data type used for evaluating the risk of an unexpected event by Amazon Cognito advanced security.
**/
public class ContextDataType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EncodedData")
    public String encodedData;
    public ContextDataType withEncodedData(String encodedData) {
        this.encodedData = encodedData;
        return this;
    }
    @JsonProperty("HttpHeaders")
    public HttpHeader[] httpHeaders;
    public ContextDataType withHttpHeaders(HttpHeader[] httpHeaders) {
        this.httpHeaders = httpHeaders;
        return this;
    }
    @JsonProperty("IpAddress")
    public String ipAddress;
    public ContextDataType withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    @JsonProperty("ServerName")
    public String serverName;
    public ContextDataType withServerName(String serverName) {
        this.serverName = serverName;
        return this;
    }
    @JsonProperty("ServerPath")
    public String serverPath;
    public ContextDataType withServerPath(String serverPath) {
        this.serverPath = serverPath;
        return this;
    }
}