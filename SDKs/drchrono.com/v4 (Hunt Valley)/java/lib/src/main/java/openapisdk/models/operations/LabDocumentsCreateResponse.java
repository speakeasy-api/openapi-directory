package openapisdk.models.operations;



public class LabDocumentsCreateResponse {
    public String contentType;
    public LabDocumentsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LabOrderDocument labOrderDocument;
    public LabDocumentsCreateResponse withLabOrderDocument(openapisdk.models.shared.LabOrderDocument labOrderDocument) {
        this.labOrderDocument = labOrderDocument;
        return this;
    }
    public Long statusCode;
    public LabDocumentsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}