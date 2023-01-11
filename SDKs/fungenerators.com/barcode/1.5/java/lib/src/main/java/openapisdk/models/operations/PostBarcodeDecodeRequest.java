package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBarcodeDecodeRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public PostBarcodeDecodeRequestBody request;
    public PostBarcodeDecodeRequest withRequest(PostBarcodeDecodeRequestBody request) {
        this.request = request;
        return this;
    }
    public PostBarcodeDecodeSecurity security;
    public PostBarcodeDecodeRequest withSecurity(PostBarcodeDecodeSecurity security) {
        this.security = security;
        return this;
    }
}