package openapisdk.models.operations;



public class UploadDocumentsResponse {
    public String contentType;
    public UploadDocumentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DocumentServiceException documentServiceException;
    public UploadDocumentsResponse withDocumentServiceException(openapisdk.models.shared.DocumentServiceException documentServiceException) {
        this.documentServiceException = documentServiceException;
        return this;
    }
    public Long statusCode;
    public UploadDocumentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UploadDocumentsResponse uploadDocumentsResponse;
    public UploadDocumentsResponse withUploadDocumentsResponse(openapisdk.models.shared.UploadDocumentsResponse uploadDocumentsResponse) {
        this.uploadDocumentsResponse = uploadDocumentsResponse;
        return this;
    }
}