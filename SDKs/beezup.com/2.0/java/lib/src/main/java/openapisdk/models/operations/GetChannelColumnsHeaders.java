package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChannelColumnsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept-Encoding")
    public String[] acceptEncoding;
    public GetChannelColumnsHeaders withAcceptEncoding(String[] acceptEncoding) {
        this.acceptEncoding = acceptEncoding;
        return this;
    }
}