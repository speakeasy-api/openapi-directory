package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ZapierRulePatchTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public ZapierRulePatchTargetHeaders[] headers;
    public ZapierRulePatchTarget withHeaders(ZapierRulePatchTargetHeaders[] headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signingKeyId")
    public String signingKeyId;
    public ZapierRulePatchTarget withSigningKeyId(String signingKeyId) {
        this.signingKeyId = signingKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ZapierRulePatchTarget withUrl(String url) {
        this.url = url;
        return this;
    }
}