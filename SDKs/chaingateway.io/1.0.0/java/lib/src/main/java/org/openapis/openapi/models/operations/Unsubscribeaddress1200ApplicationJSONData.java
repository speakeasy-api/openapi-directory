/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class Unsubscribeaddress1200ApplicationJSONData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhook_id")
    public String webhookId;

    public Unsubscribeaddress1200ApplicationJSONData withWebhookId(String webhookId) {
        this.webhookId = webhookId;
        return this;
    }
    
    public Unsubscribeaddress1200ApplicationJSONData(){}
}
