package openapisdk.models.operations;



public class GetDocumentsIdResponse {
    public String contentType;
    public GetDocumentsIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object document;
    public GetDocumentsIdResponse withDocument(Object document) {
        this.document = document;
        return this;
    }
    public Object serviceError;
    public GetDocumentsIdResponse withServiceError(Object serviceError) {
        this.serviceError = serviceError;
        return this;
    }
    public Long statusCode;
    public GetDocumentsIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}