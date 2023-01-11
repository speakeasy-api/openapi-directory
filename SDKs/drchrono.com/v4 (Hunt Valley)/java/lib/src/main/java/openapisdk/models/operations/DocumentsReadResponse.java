package openapisdk.models.operations;



public class DocumentsReadResponse {
    public String contentType;
    public DocumentsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ScannedClinicalDocument scannedClinicalDocument;
    public DocumentsReadResponse withScannedClinicalDocument(openapisdk.models.shared.ScannedClinicalDocument scannedClinicalDocument) {
        this.scannedClinicalDocument = scannedClinicalDocument;
        return this;
    }
    public Long statusCode;
    public DocumentsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}