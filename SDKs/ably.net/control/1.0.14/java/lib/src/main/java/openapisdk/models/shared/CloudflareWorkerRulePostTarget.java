package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CloudflareWorkerRulePostTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public CloudflareWorkerRulePostTargetHeaders[] headers;
    public CloudflareWorkerRulePostTarget withHeaders(CloudflareWorkerRulePostTargetHeaders[] headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signingKeyId")
    public String signingKeyId;
    public CloudflareWorkerRulePostTarget withSigningKeyId(String signingKeyId) {
        this.signingKeyId = signingKeyId;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public CloudflareWorkerRulePostTarget withUrl(String url) {
        this.url = url;
        return this;
    }
}