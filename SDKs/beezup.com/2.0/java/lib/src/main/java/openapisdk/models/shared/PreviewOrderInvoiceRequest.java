package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PreviewOrderInvoiceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invoiceSequenceNumber")
    public Long invoiceSequenceNumber;
    public PreviewOrderInvoiceRequest withInvoiceSequenceNumber(Long invoiceSequenceNumber) {
        this.invoiceSequenceNumber = invoiceSequenceNumber;
        return this;
    }
}