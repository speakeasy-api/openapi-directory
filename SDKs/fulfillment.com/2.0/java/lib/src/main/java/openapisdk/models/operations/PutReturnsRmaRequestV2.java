package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutReturnsRmaRequestV2 {
    @JsonProperty("items")
    public PutReturnsRmaRequestV2Items[] items;
    public PutReturnsRmaRequestV2 withItems(PutReturnsRmaRequestV2Items[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantOrderId")
    public String merchantOrderId;
    public PutReturnsRmaRequestV2 withMerchantOrderId(String merchantOrderId) {
        this.merchantOrderId = merchantOrderId;
        return this;
    }
    @JsonProperty("recipient")
    public openapisdk.models.shared.OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient recipient;
    public PutReturnsRmaRequestV2 withRecipient(openapisdk.models.shared.OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient recipient) {
        this.recipient = recipient;
        return this;
    }
    @JsonProperty("rmaNumber")
    public String rmaNumber;
    public PutReturnsRmaRequestV2 withRmaNumber(String rmaNumber) {
        this.rmaNumber = rmaNumber;
        return this;
    }
}