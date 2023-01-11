package openapisdk.models.operations;



public class ClinicalNoteFieldTypesReadResponse {
    public String contentType;
    public ClinicalNoteFieldTypesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SoapNoteLineItemFieldType soapNoteLineItemFieldType;
    public ClinicalNoteFieldTypesReadResponse withSoapNoteLineItemFieldType(openapisdk.models.shared.SoapNoteLineItemFieldType soapNoteLineItemFieldType) {
        this.soapNoteLineItemFieldType = soapNoteLineItemFieldType;
        return this;
    }
    public Long statusCode;
    public ClinicalNoteFieldTypesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}