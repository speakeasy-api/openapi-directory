package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WebhookTriggers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resources")
    public WebhookTriggersResources resources;
    public WebhookTriggers withResources(WebhookTriggersResources resources) {
        this.resources = resources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shares")
    public WebhookTriggersShares shares;
    public WebhookTriggers withShares(WebhookTriggersShares shares) {
        this.shares = shares;
        return this;
    }
}