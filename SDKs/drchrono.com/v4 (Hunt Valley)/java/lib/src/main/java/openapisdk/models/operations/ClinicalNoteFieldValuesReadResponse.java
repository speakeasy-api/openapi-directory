package openapisdk.models.operations;



public class ClinicalNoteFieldValuesReadResponse {
    public String contentType;
    public ClinicalNoteFieldValuesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SoapNoteLineItemFieldValue soapNoteLineItemFieldValue;
    public ClinicalNoteFieldValuesReadResponse withSoapNoteLineItemFieldValue(openapisdk.models.shared.SoapNoteLineItemFieldValue soapNoteLineItemFieldValue) {
        this.soapNoteLineItemFieldValue = soapNoteLineItemFieldValue;
        return this;
    }
    public Long statusCode;
    public ClinicalNoteFieldValuesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}