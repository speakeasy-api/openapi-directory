package openapisdk.models.operations;



public class LabDocumentsReadResponse {
    public String contentType;
    public LabDocumentsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LabOrderDocument labOrderDocument;
    public LabDocumentsReadResponse withLabOrderDocument(openapisdk.models.shared.LabOrderDocument labOrderDocument) {
        this.labOrderDocument = labOrderDocument;
        return this;
    }
    public Long statusCode;
    public LabDocumentsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}