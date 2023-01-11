package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrderInvoicePreviewHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept-Encoding")
    public String acceptEncoding;
    public GetOrderInvoicePreviewHeaders withAcceptEncoding(String acceptEncoding) {
        this.acceptEncoding = acceptEncoding;
        return this;
    }
}