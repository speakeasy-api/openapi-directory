/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class AppsListForOrg200ApplicationJSONAzureSubscription {
    /**
     * If the subscription can be used for billing
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_billable")
    public Boolean isBillable;

    public AppsListForOrg200ApplicationJSONAzureSubscription withIsBillable(Boolean isBillable) {
        this.isBillable = isBillable;
        return this;
    }
    
    /**
     * If the subscription is used for billing
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_billing")
    public Boolean isBilling;

    public AppsListForOrg200ApplicationJSONAzureSubscription withIsBilling(Boolean isBilling) {
        this.isBilling = isBilling;
        return this;
    }
    
    /**
     * If the subscription is internal Microsoft subscription
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_microsoft_internal")
    public Boolean isMicrosoftInternal;

    public AppsListForOrg200ApplicationJSONAzureSubscription withIsMicrosoftInternal(Boolean isMicrosoftInternal) {
        this.isMicrosoftInternal = isMicrosoftInternal;
        return this;
    }
    
    /**
     * The azure subscription id
     */
    @JsonProperty("subscription_id")
    public String subscriptionId;

    public AppsListForOrg200ApplicationJSONAzureSubscription withSubscriptionId(String subscriptionId) {
        this.subscriptionId = subscriptionId;
        return this;
    }
    
    /**
     * The name of the azure subscription
     */
    @JsonProperty("subscription_name")
    public String subscriptionName;

    public AppsListForOrg200ApplicationJSONAzureSubscription withSubscriptionName(String subscriptionName) {
        this.subscriptionName = subscriptionName;
        return this;
    }
    
    /**
     * The tenant id of the azure subscription belongs to
     */
    @JsonProperty("tenant_id")
    public String tenantId;

    public AppsListForOrg200ApplicationJSONAzureSubscription withTenantId(String tenantId) {
        this.tenantId = tenantId;
        return this;
    }
    
    public AppsListForOrg200ApplicationJSONAzureSubscription(@JsonProperty("subscription_id") String subscriptionId, @JsonProperty("subscription_name") String subscriptionName, @JsonProperty("tenant_id") String tenantId) {
        this.subscriptionId = subscriptionId;
        this.subscriptionName = subscriptionName;
        this.tenantId = tenantId;
  }
}
