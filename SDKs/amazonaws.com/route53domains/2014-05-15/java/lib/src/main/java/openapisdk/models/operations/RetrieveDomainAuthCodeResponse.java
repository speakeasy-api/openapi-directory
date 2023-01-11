package openapisdk.models.operations;



public class RetrieveDomainAuthCodeResponse {
    public String contentType;
    public RetrieveDomainAuthCodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInput;
    public RetrieveDomainAuthCodeResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public openapisdk.models.shared.RetrieveDomainAuthCodeResponse retrieveDomainAuthCodeResponse;
    public RetrieveDomainAuthCodeResponse withRetrieveDomainAuthCodeResponse(openapisdk.models.shared.RetrieveDomainAuthCodeResponse retrieveDomainAuthCodeResponse) {
        this.retrieveDomainAuthCodeResponse = retrieveDomainAuthCodeResponse;
        return this;
    }
    public Long statusCode;
    public RetrieveDomainAuthCodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedTLD;
    public RetrieveDomainAuthCodeResponse withUnsupportedTld(Object unsupportedTLD) {
        this.unsupportedTLD = unsupportedTLD;
        return this;
    }
}