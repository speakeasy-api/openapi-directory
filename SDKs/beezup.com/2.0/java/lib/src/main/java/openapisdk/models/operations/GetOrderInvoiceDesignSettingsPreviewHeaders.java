package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrderInvoiceDesignSettingsPreviewHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept-Encoding")
    public String acceptEncoding;
    public GetOrderInvoiceDesignSettingsPreviewHeaders withAcceptEncoding(String acceptEncoding) {
        this.acceptEncoding = acceptEncoding;
        return this;
    }
}