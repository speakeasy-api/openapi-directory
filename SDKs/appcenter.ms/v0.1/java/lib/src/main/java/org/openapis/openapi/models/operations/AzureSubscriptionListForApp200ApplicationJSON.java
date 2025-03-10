/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class AzureSubscriptionListForApp200ApplicationJSON {
    /**
     * If the subscription can be used for billing
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_billable")
    public Boolean isBillable;

    public AzureSubscriptionListForApp200ApplicationJSON withIsBillable(Boolean isBillable) {
        this.isBillable = isBillable;
        return this;
    }
    
    /**
     * If the subscription is used for billing
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_billing")
    public Boolean isBilling;

    public AzureSubscriptionListForApp200ApplicationJSON withIsBilling(Boolean isBilling) {
        this.isBilling = isBilling;
        return this;
    }
    
    /**
     * If the subscription is internal Microsoft subscription
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_microsoft_internal")
    public Boolean isMicrosoftInternal;

    public AzureSubscriptionListForApp200ApplicationJSON withIsMicrosoftInternal(Boolean isMicrosoftInternal) {
        this.isMicrosoftInternal = isMicrosoftInternal;
        return this;
    }
    
    /**
     * The azure subscription id
     */
    @JsonProperty("subscription_id")
    public String subscriptionId;

    public AzureSubscriptionListForApp200ApplicationJSON withSubscriptionId(String subscriptionId) {
        this.subscriptionId = subscriptionId;
        return this;
    }
    
    /**
     * The name of the azure subscription
     */
    @JsonProperty("subscription_name")
    public String subscriptionName;

    public AzureSubscriptionListForApp200ApplicationJSON withSubscriptionName(String subscriptionName) {
        this.subscriptionName = subscriptionName;
        return this;
    }
    
    /**
     * The tenant id of the azure subscription belongs to
     */
    @JsonProperty("tenant_id")
    public String tenantId;

    public AzureSubscriptionListForApp200ApplicationJSON withTenantId(String tenantId) {
        this.tenantId = tenantId;
        return this;
    }
    
    public AzureSubscriptionListForApp200ApplicationJSON(@JsonProperty("subscription_id") String subscriptionId, @JsonProperty("subscription_name") String subscriptionName, @JsonProperty("tenant_id") String tenantId) {
        this.subscriptionId = subscriptionId;
        this.subscriptionName = subscriptionName;
        this.tenantId = tenantId;
  }
}
