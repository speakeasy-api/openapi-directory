package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PdfOcrPdfToWordsWithLocationRequest {
    public PdfOcrPdfToWordsWithLocationHeaders headers;
    public PdfOcrPdfToWordsWithLocationRequest withHeaders(PdfOcrPdfToWordsWithLocationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PdfOcrPdfToWordsWithLocationRequestBody request;
    public PdfOcrPdfToWordsWithLocationRequest withRequest(PdfOcrPdfToWordsWithLocationRequestBody request) {
        this.request = request;
        return this;
    }
    public PdfOcrPdfToWordsWithLocationSecurity security;
    public PdfOcrPdfToWordsWithLocationRequest withSecurity(PdfOcrPdfToWordsWithLocationSecurity security) {
        this.security = security;
        return this;
    }
}