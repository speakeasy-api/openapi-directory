/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class EnterpriseAdminUpdateGlobalWebhookRequestBody {
    /**
     * Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;

    public EnterpriseAdminUpdateGlobalWebhookRequestBody withActive(Boolean active) {
        this.active = active;
        return this;
    }
    
    /**
     * Key/value pairs to provide settings for this webhook.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config")
    public EnterpriseAdminUpdateGlobalWebhookRequestBodyConfig config;

    public EnterpriseAdminUpdateGlobalWebhookRequestBody withConfig(EnterpriseAdminUpdateGlobalWebhookRequestBodyConfig config) {
        this.config = config;
        return this;
    }
    
    /**
     * The [events](https://docs.github.com/enterprise-server@2.21/webhooks/event-payloads) that trigger this webhook. A global webhook can be triggered by `user` and `organization` events. Default: `user` and `organization`.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("events")
    public String[] events;

    public EnterpriseAdminUpdateGlobalWebhookRequestBody withEvents(String[] events) {
        this.events = events;
        return this;
    }
    
    public EnterpriseAdminUpdateGlobalWebhookRequestBody(){}
}
