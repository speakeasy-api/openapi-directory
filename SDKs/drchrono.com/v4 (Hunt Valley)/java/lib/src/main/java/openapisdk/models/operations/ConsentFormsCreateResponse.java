package openapisdk.models.operations;



public class ConsentFormsCreateResponse {
    public openapisdk.models.shared.ConsentForm consentForm;
    public ConsentFormsCreateResponse withConsentForm(openapisdk.models.shared.ConsentForm consentForm) {
        this.consentForm = consentForm;
        return this;
    }
    public String contentType;
    public ConsentFormsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ConsentFormsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}