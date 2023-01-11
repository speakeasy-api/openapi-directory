package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInvoiceSummaryByUuidPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=invoice_uuid")
    public String invoiceUuid;
    public GetInvoiceSummaryByUuidPathParams withInvoiceUuid(String invoiceUuid) {
        this.invoiceUuid = invoiceUuid;
        return this;
    }
}