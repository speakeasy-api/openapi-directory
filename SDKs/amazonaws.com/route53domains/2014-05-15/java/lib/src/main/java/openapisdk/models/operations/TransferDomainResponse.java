package openapisdk.models.operations;



public class TransferDomainResponse {
    public String contentType;
    public TransferDomainResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object domainLimitExceeded;
    public TransferDomainResponse withDomainLimitExceeded(Object domainLimitExceeded) {
        this.domainLimitExceeded = domainLimitExceeded;
        return this;
    }
    public Object duplicateRequest;
    public TransferDomainResponse withDuplicateRequest(Object duplicateRequest) {
        this.duplicateRequest = duplicateRequest;
        return this;
    }
    public Object invalidInput;
    public TransferDomainResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public Object operationLimitExceeded;
    public TransferDomainResponse withOperationLimitExceeded(Object operationLimitExceeded) {
        this.operationLimitExceeded = operationLimitExceeded;
        return this;
    }
    public Long statusCode;
    public TransferDomainResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tldRulesViolation;
    public TransferDomainResponse withTldRulesViolation(Object tldRulesViolation) {
        this.tldRulesViolation = tldRulesViolation;
        return this;
    }
    public openapisdk.models.shared.TransferDomainResponse transferDomainResponse;
    public TransferDomainResponse withTransferDomainResponse(openapisdk.models.shared.TransferDomainResponse transferDomainResponse) {
        this.transferDomainResponse = transferDomainResponse;
        return this;
    }
    public Object unsupportedTLD;
    public TransferDomainResponse withUnsupportedTld(Object unsupportedTLD) {
        this.unsupportedTLD = unsupportedTLD;
        return this;
    }
}