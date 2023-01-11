package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInvoiceCsvByUuidPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=invoice_uuid")
    public String invoiceUuid;
    public GetInvoiceCsvByUuidPathParams withInvoiceUuid(String invoiceUuid) {
        this.invoiceUuid = invoiceUuid;
        return this;
    }
}