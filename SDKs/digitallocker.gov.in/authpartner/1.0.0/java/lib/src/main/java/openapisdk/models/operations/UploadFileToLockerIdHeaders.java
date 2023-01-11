package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadFileToLockerIdHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=hmac")
    public String hmac;
    public UploadFileToLockerIdHeaders withHmac(String hmac) {
        this.hmac = hmac;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=path")
    public String path;
    public UploadFileToLockerIdHeaders withPath(String path) {
        this.path = path;
        return this;
    }
}