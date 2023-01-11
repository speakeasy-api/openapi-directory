package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutReturnsRmaResponseV2 {
    @JsonProperty("items")
    public PutReturnsRmaResponseV2Items[] items;
    public PutReturnsRmaResponseV2 withItems(PutReturnsRmaResponseV2Items[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantOrderId")
    public String merchantOrderId;
    public PutReturnsRmaResponseV2 withMerchantOrderId(String merchantOrderId) {
        this.merchantOrderId = merchantOrderId;
        return this;
    }
    @JsonProperty("recipient")
    public PutReturnsRmaResponseV2ConsigneeV2 recipient;
    public PutReturnsRmaResponseV2 withRecipient(PutReturnsRmaResponseV2ConsigneeV2 recipient) {
        this.recipient = recipient;
        return this;
    }
    @JsonProperty("rmaNumber")
    public String rmaNumber;
    public PutReturnsRmaResponseV2 withRmaNumber(String rmaNumber) {
        this.rmaNumber = rmaNumber;
        return this;
    }
}