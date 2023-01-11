package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImageOcrPhotoRecognizeBusinessCardRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public ImageOcrPhotoRecognizeBusinessCardRequestBody request;
    public ImageOcrPhotoRecognizeBusinessCardRequest withRequest(ImageOcrPhotoRecognizeBusinessCardRequestBody request) {
        this.request = request;
        return this;
    }
    public ImageOcrPhotoRecognizeBusinessCardSecurity security;
    public ImageOcrPhotoRecognizeBusinessCardRequest withSecurity(ImageOcrPhotoRecognizeBusinessCardSecurity security) {
        this.security = security;
        return this;
    }
}