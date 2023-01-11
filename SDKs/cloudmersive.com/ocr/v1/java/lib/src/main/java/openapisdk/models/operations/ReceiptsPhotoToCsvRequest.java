package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReceiptsPhotoToCsvRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public ReceiptsPhotoToCsvRequestBody request;
    public ReceiptsPhotoToCsvRequest withRequest(ReceiptsPhotoToCsvRequestBody request) {
        this.request = request;
        return this;
    }
    public ReceiptsPhotoToCsvSecurity security;
    public ReceiptsPhotoToCsvRequest withSecurity(ReceiptsPhotoToCsvSecurity security) {
        this.security = security;
        return this;
    }
}