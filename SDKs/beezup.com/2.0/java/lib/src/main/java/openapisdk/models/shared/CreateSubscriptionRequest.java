package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateSubscriptionRequest {
    @JsonProperty("merchantApplicationName")
    public String merchantApplicationName;
    public CreateSubscriptionRequest withMerchantApplicationName(String merchantApplicationName) {
        this.merchantApplicationName = merchantApplicationName;
        return this;
    }
    @JsonProperty("merchantApplicationVersion")
    public String merchantApplicationVersion;
    public CreateSubscriptionRequest withMerchantApplicationVersion(String merchantApplicationVersion) {
        this.merchantApplicationVersion = merchantApplicationVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantEmailAlert")
    public String merchantEmailAlert;
    public CreateSubscriptionRequest withMerchantEmailAlert(String merchantEmailAlert) {
        this.merchantEmailAlert = merchantEmailAlert;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateSubscriptionRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("targetUrl")
    public String targetUrl;
    public CreateSubscriptionRequest withTargetUrl(String targetUrl) {
        this.targetUrl = targetUrl;
        return this;
    }
}