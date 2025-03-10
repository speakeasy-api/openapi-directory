/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetWebhooksIdWebhookLogs200ApplicationJSON - webhooklogs
 */
public class GetWebhooksIdWebhookLogs200ApplicationJSON {
    /**
     * total number of results
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Double total;

    public GetWebhooksIdWebhookLogs200ApplicationJSON withTotal(Double total) {
        this.total = total;
        return this;
    }
    
    @JsonProperty("webhooklogs")
    public org.openapis.openapi.models.shared.WebhookLog[] webhooklogs;

    public GetWebhooksIdWebhookLogs200ApplicationJSON withWebhooklogs(org.openapis.openapi.models.shared.WebhookLog[] webhooklogs) {
        this.webhooklogs = webhooklogs;
        return this;
    }
    
    public GetWebhooksIdWebhookLogs200ApplicationJSON(@JsonProperty("webhooklogs") org.openapis.openapi.models.shared.WebhookLog[] webhooklogs) {
        this.webhooklogs = webhooklogs;
  }
}
