package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CloudflareWorkerRulePatchTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public CloudflareWorkerRulePatchTargetHeaders[] headers;
    public CloudflareWorkerRulePatchTarget withHeaders(CloudflareWorkerRulePatchTargetHeaders[] headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signingKeyId")
    public String signingKeyId;
    public CloudflareWorkerRulePatchTarget withSigningKeyId(String signingKeyId) {
        this.signingKeyId = signingKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public CloudflareWorkerRulePatchTarget withUrl(String url) {
        this.url = url;
        return this;
    }
}