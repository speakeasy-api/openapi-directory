/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import java.time.OffsetDateTime;

/**
 * ReservedNode - Describes a reserved node. You can call the &lt;a&gt;DescribeReservedNodeOfferings&lt;/a&gt; API to obtain the available reserved node offerings. 
 */
public class ReservedNode {
    
    public String currencyCode;

    public ReservedNode withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    
    
    public Long duration;

    public ReservedNode withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    
    
    public Double fixedPrice;

    public ReservedNode withFixedPrice(Double fixedPrice) {
        this.fixedPrice = fixedPrice;
        return this;
    }
    
    
    public Long nodeCount;

    public ReservedNode withNodeCount(Long nodeCount) {
        this.nodeCount = nodeCount;
        return this;
    }
    
    
    public String nodeType;

    public ReservedNode withNodeType(String nodeType) {
        this.nodeType = nodeType;
        return this;
    }
    
    
    public String offeringType;

    public ReservedNode withOfferingType(String offeringType) {
        this.offeringType = offeringType;
        return this;
    }
    
    
    public RecurringChargeList[] recurringCharges;

    public ReservedNode withRecurringCharges(RecurringChargeList[] recurringCharges) {
        this.recurringCharges = recurringCharges;
        return this;
    }
    
    
    public String reservedNodeId;

    public ReservedNode withReservedNodeId(String reservedNodeId) {
        this.reservedNodeId = reservedNodeId;
        return this;
    }
    
    
    public String reservedNodeOfferingId;

    public ReservedNode withReservedNodeOfferingId(String reservedNodeOfferingId) {
        this.reservedNodeOfferingId = reservedNodeOfferingId;
        return this;
    }
    
    
    public ReservedNodeOfferingTypeEnum reservedNodeOfferingType;

    public ReservedNode withReservedNodeOfferingType(ReservedNodeOfferingTypeEnum reservedNodeOfferingType) {
        this.reservedNodeOfferingType = reservedNodeOfferingType;
        return this;
    }
    
    
    public OffsetDateTime startTime;

    public ReservedNode withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    
    
    public String state;

    public ReservedNode withState(String state) {
        this.state = state;
        return this;
    }
    
    
    public Double usagePrice;

    public ReservedNode withUsagePrice(Double usagePrice) {
        this.usagePrice = usagePrice;
        return this;
    }
    
    public ReservedNode(){}
}
