package openapisdk.models.operations;



public class CheckDomainAvailabilityResponse {
    public openapisdk.models.shared.CheckDomainAvailabilityResponse checkDomainAvailabilityResponse;
    public CheckDomainAvailabilityResponse withCheckDomainAvailabilityResponse(openapisdk.models.shared.CheckDomainAvailabilityResponse checkDomainAvailabilityResponse) {
        this.checkDomainAvailabilityResponse = checkDomainAvailabilityResponse;
        return this;
    }
    public String contentType;
    public CheckDomainAvailabilityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInput;
    public CheckDomainAvailabilityResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public Long statusCode;
    public CheckDomainAvailabilityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedTLD;
    public CheckDomainAvailabilityResponse withUnsupportedTld(Object unsupportedTLD) {
        this.unsupportedTLD = unsupportedTLD;
        return this;
    }
}