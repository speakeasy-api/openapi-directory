package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImageOcrPhotoToTextRequest {
    public ImageOcrPhotoToTextHeaders headers;
    public ImageOcrPhotoToTextRequest withHeaders(ImageOcrPhotoToTextHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public ImageOcrPhotoToTextRequestBody request;
    public ImageOcrPhotoToTextRequest withRequest(ImageOcrPhotoToTextRequestBody request) {
        this.request = request;
        return this;
    }
    public ImageOcrPhotoToTextSecurity security;
    public ImageOcrPhotoToTextRequest withSecurity(ImageOcrPhotoToTextSecurity security) {
        this.security = security;
        return this;
    }
}