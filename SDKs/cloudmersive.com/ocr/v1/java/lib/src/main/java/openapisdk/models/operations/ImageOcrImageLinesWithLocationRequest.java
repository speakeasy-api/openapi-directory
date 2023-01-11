package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImageOcrImageLinesWithLocationRequest {
    public ImageOcrImageLinesWithLocationHeaders headers;
    public ImageOcrImageLinesWithLocationRequest withHeaders(ImageOcrImageLinesWithLocationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public ImageOcrImageLinesWithLocationRequestBody request;
    public ImageOcrImageLinesWithLocationRequest withRequest(ImageOcrImageLinesWithLocationRequestBody request) {
        this.request = request;
        return this;
    }
    public ImageOcrImageLinesWithLocationSecurity security;
    public ImageOcrImageLinesWithLocationRequest withSecurity(ImageOcrImageLinesWithLocationSecurity security) {
        this.security = security;
        return this;
    }
}