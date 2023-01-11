package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListWebhooksResult
 *  The result structure for the list webhooks request. 
**/
public class ListWebhooksResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListWebhooksResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("webhooks")
    public Webhook[] webhooks;
    public ListWebhooksResult withWebhooks(Webhook[] webhooks) {
        this.webhooks = webhooks;
        return this;
    }
}