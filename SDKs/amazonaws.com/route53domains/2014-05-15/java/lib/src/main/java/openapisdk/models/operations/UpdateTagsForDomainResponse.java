package openapisdk.models.operations;



public class UpdateTagsForDomainResponse {
    public String contentType;
    public UpdateTagsForDomainResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInput;
    public UpdateTagsForDomainResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public Object operationLimitExceeded;
    public UpdateTagsForDomainResponse withOperationLimitExceeded(Object operationLimitExceeded) {
        this.operationLimitExceeded = operationLimitExceeded;
        return this;
    }
    public Long statusCode;
    public UpdateTagsForDomainResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedTLD;
    public UpdateTagsForDomainResponse withUnsupportedTld(Object unsupportedTLD) {
        this.unsupportedTLD = unsupportedTLD;
        return this;
    }
    public java.util.Map<String, Object> updateTagsForDomainResponse;
    public UpdateTagsForDomainResponse withUpdateTagsForDomainResponse(java.util.Map<String, Object> updateTagsForDomainResponse) {
        this.updateTagsForDomainResponse = updateTagsForDomainResponse;
        return this;
    }
}