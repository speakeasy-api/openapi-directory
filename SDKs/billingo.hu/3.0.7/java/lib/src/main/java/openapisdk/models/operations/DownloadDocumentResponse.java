package openapisdk.models.operations;



public class DownloadDocumentResponse {
    public openapisdk.models.shared.ClientError clientError;
    public DownloadDocumentResponse withClientError(openapisdk.models.shared.ClientError clientError) {
        this.clientError = clientError;
        return this;
    }
    public openapisdk.models.shared.ClientErrorResponse clientErrorResponse;
    public DownloadDocumentResponse withClientErrorResponse(openapisdk.models.shared.ClientErrorResponse clientErrorResponse) {
        this.clientErrorResponse = clientErrorResponse;
        return this;
    }
    public String contentType;
    public DownloadDocumentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public byte[] downloadDocument200ApplicationPdfBinaryString;
    public DownloadDocumentResponse withDownloadDocument200ApplicationPdfBinaryString(byte[] downloadDocument200ApplicationPdfBinaryString) {
        this.downloadDocument200ApplicationPdfBinaryString = downloadDocument200ApplicationPdfBinaryString;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DownloadDocumentResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.ServerErrorResponse serverErrorResponse;
    public DownloadDocumentResponse withServerErrorResponse(openapisdk.models.shared.ServerErrorResponse serverErrorResponse) {
        this.serverErrorResponse = serverErrorResponse;
        return this;
    }
    public Long statusCode;
    public DownloadDocumentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationErrorResponse validationErrorResponse;
    public DownloadDocumentResponse withValidationErrorResponse(openapisdk.models.shared.ValidationErrorResponse validationErrorResponse) {
        this.validationErrorResponse = validationErrorResponse;
        return this;
    }
}