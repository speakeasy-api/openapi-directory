package openapisdk.models.operations;



public class DatabaseListDocumentsResponse {
    public String contentType;
    public DatabaseListDocumentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DatabaseListDocumentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.DocumentList documentList;
    public DatabaseListDocumentsResponse withDocumentList(openapisdk.models.shared.DocumentList documentList) {
        this.documentList = documentList;
        return this;
    }
}