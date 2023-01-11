package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ZapierRulePostTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public ZapierRulePostTargetHeaders[] headers;
    public ZapierRulePostTarget withHeaders(ZapierRulePostTargetHeaders[] headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signingKeyId")
    public String signingKeyId;
    public ZapierRulePostTarget withSigningKeyId(String signingKeyId) {
        this.signingKeyId = signingKeyId;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public ZapierRulePostTarget withUrl(String url) {
        this.url = url;
        return this;
    }
}