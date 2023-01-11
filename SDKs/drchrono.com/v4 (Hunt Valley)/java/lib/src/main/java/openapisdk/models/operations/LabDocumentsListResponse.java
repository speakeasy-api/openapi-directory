package openapisdk.models.operations;



public class LabDocumentsListResponse {
    public String contentType;
    public LabDocumentsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LabDocumentsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public LabDocumentsList200ApplicationJson labDocumentsList200ApplicationJSONObject;
    public LabDocumentsListResponse withLabDocumentsList200ApplicationJsonObject(LabDocumentsList200ApplicationJson labDocumentsList200ApplicationJSONObject) {
        this.labDocumentsList200ApplicationJSONObject = labDocumentsList200ApplicationJSONObject;
        return this;
    }
}