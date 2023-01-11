package openapisdk.models.operations;



public class PdfOcrPdfToLinesWithLocationResponse {
    public byte[] body;
    public PdfOcrPdfToLinesWithLocationResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PdfOcrPdfToLinesWithLocationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PdfToLinesWithLocationResult pdfToLinesWithLocationResult;
    public PdfOcrPdfToLinesWithLocationResponse withPdfToLinesWithLocationResult(openapisdk.models.shared.PdfToLinesWithLocationResult pdfToLinesWithLocationResult) {
        this.pdfToLinesWithLocationResult = pdfToLinesWithLocationResult;
        return this;
    }
    public Long statusCode;
    public PdfOcrPdfToLinesWithLocationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}