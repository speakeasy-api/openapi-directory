package openapisdk.models.operations;



public class CheckDomainTransferabilityResponse {
    public openapisdk.models.shared.CheckDomainTransferabilityResponse checkDomainTransferabilityResponse;
    public CheckDomainTransferabilityResponse withCheckDomainTransferabilityResponse(openapisdk.models.shared.CheckDomainTransferabilityResponse checkDomainTransferabilityResponse) {
        this.checkDomainTransferabilityResponse = checkDomainTransferabilityResponse;
        return this;
    }
    public String contentType;
    public CheckDomainTransferabilityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInput;
    public CheckDomainTransferabilityResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public Long statusCode;
    public CheckDomainTransferabilityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedTLD;
    public CheckDomainTransferabilityResponse withUnsupportedTld(Object unsupportedTLD) {
        this.unsupportedTLD = unsupportedTLD;
        return this;
    }
}