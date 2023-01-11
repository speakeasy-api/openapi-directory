package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LegacyReference
 * Type defining the legacyReference container. This container is needed if the seller is issuing a refund for an individual order line item, and wishes to use an item ID and transaction ID to identify the order line item.
**/
public class LegacyReference {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legacyItemId")
    public String legacyItemId;
    public LegacyReference withLegacyItemId(String legacyItemId) {
        this.legacyItemId = legacyItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legacyTransactionId")
    public String legacyTransactionId;
    public LegacyReference withLegacyTransactionId(String legacyTransactionId) {
        this.legacyTransactionId = legacyTransactionId;
        return this;
    }
}