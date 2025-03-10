/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import java.time.OffsetDateTime;

/**
 * ReservedNodeList - Describes a reserved node. You can call the &lt;a&gt;DescribeReservedNodeOfferings&lt;/a&gt; API to obtain the available reserved node offerings. 
 */
public class ReservedNodeList {
    
    public String currencyCode;

    public ReservedNodeList withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    
    
    public Long duration;

    public ReservedNodeList withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    
    
    public Double fixedPrice;

    public ReservedNodeList withFixedPrice(Double fixedPrice) {
        this.fixedPrice = fixedPrice;
        return this;
    }
    
    
    public Long nodeCount;

    public ReservedNodeList withNodeCount(Long nodeCount) {
        this.nodeCount = nodeCount;
        return this;
    }
    
    
    public String nodeType;

    public ReservedNodeList withNodeType(String nodeType) {
        this.nodeType = nodeType;
        return this;
    }
    
    
    public String offeringType;

    public ReservedNodeList withOfferingType(String offeringType) {
        this.offeringType = offeringType;
        return this;
    }
    
    
    public RecurringChargeList[] recurringCharges;

    public ReservedNodeList withRecurringCharges(RecurringChargeList[] recurringCharges) {
        this.recurringCharges = recurringCharges;
        return this;
    }
    
    
    public String reservedNodeId;

    public ReservedNodeList withReservedNodeId(String reservedNodeId) {
        this.reservedNodeId = reservedNodeId;
        return this;
    }
    
    
    public String reservedNodeOfferingId;

    public ReservedNodeList withReservedNodeOfferingId(String reservedNodeOfferingId) {
        this.reservedNodeOfferingId = reservedNodeOfferingId;
        return this;
    }
    
    
    public ReservedNodeOfferingTypeEnum reservedNodeOfferingType;

    public ReservedNodeList withReservedNodeOfferingType(ReservedNodeOfferingTypeEnum reservedNodeOfferingType) {
        this.reservedNodeOfferingType = reservedNodeOfferingType;
        return this;
    }
    
    
    public OffsetDateTime startTime;

    public ReservedNodeList withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    
    
    public String state;

    public ReservedNodeList withState(String state) {
        this.state = state;
        return this;
    }
    
    
    public Double usagePrice;

    public ReservedNodeList withUsagePrice(Double usagePrice) {
        this.usagePrice = usagePrice;
        return this;
    }
    
    public ReservedNodeList(){}
}
