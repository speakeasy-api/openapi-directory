package openapisdk.models.operations;



public class PdfOcrPostResponse {
    public byte[] body;
    public PdfOcrPostResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PdfOcrPostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PdfToTextResponse pdfToTextResponse;
    public PdfOcrPostResponse withPdfToTextResponse(openapisdk.models.shared.PdfToTextResponse pdfToTextResponse) {
        this.pdfToTextResponse = pdfToTextResponse;
        return this;
    }
    public Long statusCode;
    public PdfOcrPostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}