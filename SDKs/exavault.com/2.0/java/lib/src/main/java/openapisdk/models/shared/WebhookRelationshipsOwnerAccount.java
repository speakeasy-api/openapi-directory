package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WebhookRelationshipsOwnerAccount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public WebhookRelationshipsOwnerAccountData data;
    public WebhookRelationshipsOwnerAccount withData(WebhookRelationshipsOwnerAccountData data) {
        this.data = data;
        return this;
    }
}