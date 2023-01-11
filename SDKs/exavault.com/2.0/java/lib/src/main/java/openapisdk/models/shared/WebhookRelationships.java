package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WebhookRelationships {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownerAccount")
    public WebhookRelationshipsOwnerAccount ownerAccount;
    public WebhookRelationships withOwnerAccount(WebhookRelationshipsOwnerAccount ownerAccount) {
        this.ownerAccount = ownerAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource")
    public WebhookRelationshipsResource resource;
    public WebhookRelationships withResource(WebhookRelationshipsResource resource) {
        this.resource = resource;
        return this;
    }
}