package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Offer
 * A complex type that defines an offer that a seller makes to eligible buyers.
**/
public class Offer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowCounterOffer")
    public Boolean allowCounterOffer;
    public Offer withAllowCounterOffer(Boolean allowCounterOffer) {
        this.allowCounterOffer = allowCounterOffer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buyer")
    public User buyer;
    public Offer withBuyer(User buyer) {
        this.buyer = buyer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationDate")
    public String creationDate;
    public Offer withCreationDate(String creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initiatedBy")
    public String initiatedBy;
    public Offer withInitiatedBy(String initiatedBy) {
        this.initiatedBy = initiatedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastModifiedDate")
    public String lastModifiedDate;
    public Offer withLastModifiedDate(String lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public Offer withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offerDuration")
    public TimeDuration offerDuration;
    public Offer withOfferDuration(TimeDuration offerDuration) {
        this.offerDuration = offerDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offerId")
    public String offerId;
    public Offer withOfferId(String offerId) {
        this.offerId = offerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offerStatus")
    public String offerStatus;
    public Offer withOfferStatus(String offerStatus) {
        this.offerStatus = offerStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offerType")
    public String offerType;
    public Offer withOfferType(String offerType) {
        this.offerType = offerType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offeredItems")
    public OfferedItem[] offeredItems;
    public Offer withOfferedItems(OfferedItem[] offeredItems) {
        this.offeredItems = offeredItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revision")
    public String revision;
    public Offer withRevision(String revision) {
        this.revision = revision;
        return this;
    }
}