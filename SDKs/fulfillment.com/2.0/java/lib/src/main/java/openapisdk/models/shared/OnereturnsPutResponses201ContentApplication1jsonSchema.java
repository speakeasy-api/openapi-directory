package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OnereturnsPutResponses201ContentApplication1jsonSchema {
    @JsonProperty("items")
    public OnereturnsPutResponses201ContentApplication1jsonSchemaItems[] items;
    public OnereturnsPutResponses201ContentApplication1jsonSchema withItems(OnereturnsPutResponses201ContentApplication1jsonSchemaItems[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantOrderId")
    public String merchantOrderId;
    public OnereturnsPutResponses201ContentApplication1jsonSchema withMerchantOrderId(String merchantOrderId) {
        this.merchantOrderId = merchantOrderId;
        return this;
    }
    @JsonProperty("recipient")
    public OnereturnsPutResponses201ContentApplication1jsonSchemaConsigneeV2 recipient;
    public OnereturnsPutResponses201ContentApplication1jsonSchema withRecipient(OnereturnsPutResponses201ContentApplication1jsonSchemaConsigneeV2 recipient) {
        this.recipient = recipient;
        return this;
    }
    @JsonProperty("rmaNumber")
    public String rmaNumber;
    public OnereturnsPutResponses201ContentApplication1jsonSchema withRmaNumber(String rmaNumber) {
        this.rmaNumber = rmaNumber;
        return this;
    }
}