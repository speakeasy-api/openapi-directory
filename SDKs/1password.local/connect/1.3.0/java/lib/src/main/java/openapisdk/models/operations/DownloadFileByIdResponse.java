package openapisdk.models.operations;



public class DownloadFileByIdResponse {
    public String contentType;
    public DownloadFileByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public byte[] downloadFileByID200ApplicationOctetStreamBinaryString;
    public DownloadFileByIdResponse withDownloadFileById200ApplicationOctetStreamBinaryString(byte[] downloadFileByID200ApplicationOctetStreamBinaryString) {
        this.downloadFileByID200ApplicationOctetStreamBinaryString = downloadFileByID200ApplicationOctetStreamBinaryString;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public DownloadFileByIdResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DownloadFileByIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DownloadFileByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}