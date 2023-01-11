package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImageOcrPhotoRecognizeReceiptRequest {
    public ImageOcrPhotoRecognizeReceiptHeaders headers;
    public ImageOcrPhotoRecognizeReceiptRequest withHeaders(ImageOcrPhotoRecognizeReceiptHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public ImageOcrPhotoRecognizeReceiptRequestBody request;
    public ImageOcrPhotoRecognizeReceiptRequest withRequest(ImageOcrPhotoRecognizeReceiptRequestBody request) {
        this.request = request;
        return this;
    }
    public ImageOcrPhotoRecognizeReceiptSecurity security;
    public ImageOcrPhotoRecognizeReceiptRequest withSecurity(ImageOcrPhotoRecognizeReceiptSecurity security) {
        this.security = security;
        return this;
    }
}