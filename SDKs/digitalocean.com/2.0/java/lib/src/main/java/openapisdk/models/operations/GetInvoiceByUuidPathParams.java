package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInvoiceByUuidPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=invoice_uuid")
    public String invoiceUuid;
    public GetInvoiceByUuidPathParams withInvoiceUuid(String invoiceUuid) {
        this.invoiceUuid = invoiceUuid;
        return this;
    }
}