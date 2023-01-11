package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendbatchPostHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept")
    public String accept;
    public SendbatchPostHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Content-Type")
    public String contentType;
    public SendbatchPostHeaders withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
}