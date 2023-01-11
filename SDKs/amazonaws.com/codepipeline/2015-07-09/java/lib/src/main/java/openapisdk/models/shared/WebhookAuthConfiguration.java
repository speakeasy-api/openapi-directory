package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebhookAuthConfiguration
 * The authentication applied to incoming webhook trigger requests.
**/
public class WebhookAuthConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowedIPRange")
    public String allowedIPRange;
    public WebhookAuthConfiguration withAllowedIpRange(String allowedIPRange) {
        this.allowedIPRange = allowedIPRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecretToken")
    public String secretToken;
    public WebhookAuthConfiguration withSecretToken(String secretToken) {
        this.secretToken = secretToken;
        return this;
    }
}