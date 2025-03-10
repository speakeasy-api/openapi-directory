/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillingsUsageTestService - Resource usage for a single Mobile Center service
 */
public class BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillingsUsageTestService {
    /**
     * Usage for a single period
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentUsagePeriod")
    public BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillingsUsageTestServiceCurrentUsagePeriod currentUsagePeriod;

    public BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillingsUsageTestService withCurrentUsagePeriod(BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillingsUsageTestServiceCurrentUsagePeriod currentUsagePeriod) {
        this.currentUsagePeriod = currentUsagePeriod;
        return this;
    }
    
    public BillingAggregatedInformationGetAll200ApplicationJSONAggregatedBillingsUsageTestService(){}
}
