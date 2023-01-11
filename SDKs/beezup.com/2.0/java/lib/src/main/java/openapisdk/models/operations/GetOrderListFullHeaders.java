package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrderListFullHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept-Encoding")
    public String[] acceptEncoding;
    public GetOrderListFullHeaders withAcceptEncoding(String[] acceptEncoding) {
        this.acceptEncoding = acceptEncoding;
        return this;
    }
}