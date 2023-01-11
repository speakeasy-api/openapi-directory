package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CloudflareWorkerRuleResponseTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headers")
    public CloudflareWorkerRuleResponseTargetHeaders[] headers;
    public CloudflareWorkerRuleResponseTarget withHeaders(CloudflareWorkerRuleResponseTargetHeaders[] headers) {
        this.headers = headers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signingKeyId")
    public String signingKeyId;
    public CloudflareWorkerRuleResponseTarget withSigningKeyId(String signingKeyId) {
        this.signingKeyId = signingKeyId;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public CloudflareWorkerRuleResponseTarget withUrl(String url) {
        this.url = url;
        return this;
    }
}