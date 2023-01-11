package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GenerateOrderInvoiceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceSequenceNumber")
    public Long invoiceSequenceNumber;
    public GenerateOrderInvoiceRequest withInvoiceSequenceNumber(Long invoiceSequenceNumber) {
        this.invoiceSequenceNumber = invoiceSequenceNumber;
        return this;
    }
}