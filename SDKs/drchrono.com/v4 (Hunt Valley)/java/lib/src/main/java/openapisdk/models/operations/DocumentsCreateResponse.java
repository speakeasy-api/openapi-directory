package openapisdk.models.operations;



public class DocumentsCreateResponse {
    public String contentType;
    public DocumentsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ScannedClinicalDocument scannedClinicalDocument;
    public DocumentsCreateResponse withScannedClinicalDocument(openapisdk.models.shared.ScannedClinicalDocument scannedClinicalDocument) {
        this.scannedClinicalDocument = scannedClinicalDocument;
        return this;
    }
    public Long statusCode;
    public DocumentsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}