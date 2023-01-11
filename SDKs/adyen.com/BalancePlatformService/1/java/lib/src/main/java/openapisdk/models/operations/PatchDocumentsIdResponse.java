package openapisdk.models.operations;



public class PatchDocumentsIdResponse {
    public String contentType;
    public PatchDocumentsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object document;
    public PatchDocumentsIdResponse withDocument(Object document) {
        this.document = document;
        return this;
    }
    public Object serviceError;
    public PatchDocumentsIdResponse withServiceError(Object serviceError) {
        this.serviceError = serviceError;
        return this;
    }
    public Long statusCode;
    public PatchDocumentsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}