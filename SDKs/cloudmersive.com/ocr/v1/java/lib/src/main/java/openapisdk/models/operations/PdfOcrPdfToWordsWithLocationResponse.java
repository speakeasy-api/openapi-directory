package openapisdk.models.operations;



public class PdfOcrPdfToWordsWithLocationResponse {
    public byte[] body;
    public PdfOcrPdfToWordsWithLocationResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PdfOcrPdfToWordsWithLocationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PdfToWordsWithLocationResult pdfToWordsWithLocationResult;
    public PdfOcrPdfToWordsWithLocationResponse withPdfToWordsWithLocationResult(openapisdk.models.shared.PdfToWordsWithLocationResult pdfToWordsWithLocationResult) {
        this.pdfToWordsWithLocationResult = pdfToWordsWithLocationResult;
        return this;
    }
    public Long statusCode;
    public PdfOcrPdfToWordsWithLocationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}