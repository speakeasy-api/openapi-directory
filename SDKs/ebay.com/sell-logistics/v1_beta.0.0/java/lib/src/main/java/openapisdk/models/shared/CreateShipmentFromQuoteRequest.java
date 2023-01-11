package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateShipmentFromQuoteRequest
 * This complex type contains the request payload for the createFromShippingQuote method.
**/
public class CreateShipmentFromQuoteRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalOptions")
    public AdditionalOption[] additionalOptions;
    public CreateShipmentFromQuoteRequest withAdditionalOptions(AdditionalOption[] additionalOptions) {
        this.additionalOptions = additionalOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labelCustomMessage")
    public String labelCustomMessage;
    public CreateShipmentFromQuoteRequest withLabelCustomMessage(String labelCustomMessage) {
        this.labelCustomMessage = labelCustomMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labelSize")
    public String labelSize;
    public CreateShipmentFromQuoteRequest withLabelSize(String labelSize) {
        this.labelSize = labelSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rateId")
    public String rateId;
    public CreateShipmentFromQuoteRequest withRateId(String rateId) {
        this.rateId = rateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnTo")
    public Contact returnTo;
    public CreateShipmentFromQuoteRequest withReturnTo(Contact returnTo) {
        this.returnTo = returnTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shippingQuoteId")
    public String shippingQuoteId;
    public CreateShipmentFromQuoteRequest withShippingQuoteId(String shippingQuoteId) {
        this.shippingQuoteId = shippingQuoteId;
        return this;
    }
}