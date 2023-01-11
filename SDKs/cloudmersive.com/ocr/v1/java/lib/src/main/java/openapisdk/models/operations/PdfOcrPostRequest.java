package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PdfOcrPostRequest {
    public PdfOcrPostHeaders headers;
    public PdfOcrPostRequest withHeaders(PdfOcrPostHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PdfOcrPostRequestBody request;
    public PdfOcrPostRequest withRequest(PdfOcrPostRequestBody request) {
        this.request = request;
        return this;
    }
    public PdfOcrPostSecurity security;
    public PdfOcrPostRequest withSecurity(PdfOcrPostSecurity security) {
        this.security = security;
        return this;
    }
}