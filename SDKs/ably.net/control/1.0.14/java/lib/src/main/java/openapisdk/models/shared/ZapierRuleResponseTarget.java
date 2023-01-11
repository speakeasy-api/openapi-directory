package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ZapierRuleResponseTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public ZapierRuleResponseTargetHeaders[] headers;
    public ZapierRuleResponseTarget withHeaders(ZapierRuleResponseTargetHeaders[] headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signingKeyId")
    public String signingKeyId;
    public ZapierRuleResponseTarget withSigningKeyId(String signingKeyId) {
        this.signingKeyId = signingKeyId;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public ZapierRuleResponseTarget withUrl(String url) {
        this.url = url;
        return this;
    }
}