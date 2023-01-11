package openapisdk.models.operations;



public class ClinicalNoteFieldValuesCreateResponse {
    public String contentType;
    public ClinicalNoteFieldValuesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SoapNoteLineItemFieldValue soapNoteLineItemFieldValue;
    public ClinicalNoteFieldValuesCreateResponse withSoapNoteLineItemFieldValue(openapisdk.models.shared.SoapNoteLineItemFieldValue soapNoteLineItemFieldValue) {
        this.soapNoteLineItemFieldValue = soapNoteLineItemFieldValue;
        return this;
    }
    public Long statusCode;
    public ClinicalNoteFieldValuesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}