package openapisdk.models.operations;



public class ConsentFormsReadResponse {
    public openapisdk.models.shared.ConsentForm consentForm;
    public ConsentFormsReadResponse withConsentForm(openapisdk.models.shared.ConsentForm consentForm) {
        this.consentForm = consentForm;
        return this;
    }
    public String contentType;
    public ConsentFormsReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ConsentFormsReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}