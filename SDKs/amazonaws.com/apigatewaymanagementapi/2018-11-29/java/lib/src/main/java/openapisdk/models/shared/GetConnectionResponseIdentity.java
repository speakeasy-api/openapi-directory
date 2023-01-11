package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetConnectionResponseIdentity {
    @JsonProperty("SourceIp")
    public java.util.Map<String, Object> sourceIp;
    public GetConnectionResponseIdentity withSourceIp(java.util.Map<String, Object> sourceIp) {
        this.sourceIp = sourceIp;
        return this;
    }
    @JsonProperty("UserAgent")
    public java.util.Map<String, Object> userAgent;
    public GetConnectionResponseIdentity withUserAgent(java.util.Map<String, Object> userAgent) {
        this.userAgent = userAgent;
        return this;
    }
}