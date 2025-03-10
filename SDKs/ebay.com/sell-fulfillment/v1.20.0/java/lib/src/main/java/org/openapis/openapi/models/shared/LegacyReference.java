/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LegacyReference - Type defining the &lt;b&gt;legacyReference&lt;/b&gt; container. This container is needed if the seller is issuing a refund for an individual order line item, and wishes to use an item ID and transaction ID to identify the order line item.
 */
public class LegacyReference {
    /**
     * The unique identifier of a listing in legacy/Trading API format. &lt;br&gt;&lt;br&gt;&lt;span class="tablenote"&gt;&lt;strong&gt;Note:&lt;/strong&gt; Both &lt;b&gt;legacyItemId&lt;/b&gt; and &lt;b&gt;legacyTransactionId&lt;/b&gt; are needed to identify an order line item. &lt;/span&gt;
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legacyItemId")
    public String legacyItemId;

    public LegacyReference withLegacyItemId(String legacyItemId) {
        this.legacyItemId = legacyItemId;
        return this;
    }
    
    /**
     * The unique identifier of a sale/transaction in legacy/Trading API format. A 'transaction ID' is created once a buyer purchases a 'Buy It Now' item or if an auction listing ends with a winning bidder. &lt;br&gt;&lt;br&gt;&lt;span class="tablenote"&gt;&lt;strong&gt;Note:&lt;/strong&gt; Both &lt;b&gt;legacyItemId&lt;/b&gt; and &lt;b&gt;legacyTransactionId&lt;/b&gt; are needed to identify an order line item. &lt;/span&gt;
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legacyTransactionId")
    public String legacyTransactionId;

    public LegacyReference withLegacyTransactionId(String legacyTransactionId) {
        this.legacyTransactionId = legacyTransactionId;
        return this;
    }
    
    public LegacyReference(){}
}
