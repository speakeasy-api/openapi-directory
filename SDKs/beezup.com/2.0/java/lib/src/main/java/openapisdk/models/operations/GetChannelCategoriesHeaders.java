package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChannelCategoriesHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept-Encoding")
    public String[] acceptEncoding;
    public GetChannelCategoriesHeaders withAcceptEncoding(String[] acceptEncoding) {
        this.acceptEncoding = acceptEncoding;
        return this;
    }
}