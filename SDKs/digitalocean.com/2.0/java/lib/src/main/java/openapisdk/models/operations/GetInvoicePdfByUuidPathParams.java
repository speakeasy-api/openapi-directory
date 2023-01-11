package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInvoicePdfByUuidPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=invoice_uuid")
    public String invoiceUuid;
    public GetInvoicePdfByUuidPathParams withInvoiceUuid(String invoiceUuid) {
        this.invoiceUuid = invoiceUuid;
        return this;
    }
}