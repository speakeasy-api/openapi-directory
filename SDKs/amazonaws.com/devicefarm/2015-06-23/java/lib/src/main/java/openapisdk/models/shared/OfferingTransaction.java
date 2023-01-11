package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * OfferingTransaction
 * Represents the metadata of an offering transaction.
**/
public class OfferingTransaction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cost")
    public MonetaryAmount cost;
    public OfferingTransaction withCost(MonetaryAmount cost) {
        this.cost = cost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdOn")
    public OffsetDateTime createdOn;
    public OfferingTransaction withCreatedOn(OffsetDateTime createdOn) {
        this.createdOn = createdOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offeringPromotionId")
    public String offeringPromotionId;
    public OfferingTransaction withOfferingPromotionId(String offeringPromotionId) {
        this.offeringPromotionId = offeringPromotionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offeringStatus")
    public OfferingStatus offeringStatus;
    public OfferingTransaction withOfferingStatus(OfferingStatus offeringStatus) {
        this.offeringStatus = offeringStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionId")
    public String transactionId;
    public OfferingTransaction withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}