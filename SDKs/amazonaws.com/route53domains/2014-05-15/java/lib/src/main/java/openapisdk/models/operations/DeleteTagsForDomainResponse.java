package openapisdk.models.operations;



public class DeleteTagsForDomainResponse {
    public String contentType;
    public DeleteTagsForDomainResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteTagsForDomainResponse;
    public DeleteTagsForDomainResponse withDeleteTagsForDomainResponse(java.util.Map<String, Object> deleteTagsForDomainResponse) {
        this.deleteTagsForDomainResponse = deleteTagsForDomainResponse;
        return this;
    }
    public Object invalidInput;
    public DeleteTagsForDomainResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public Object operationLimitExceeded;
    public DeleteTagsForDomainResponse withOperationLimitExceeded(Object operationLimitExceeded) {
        this.operationLimitExceeded = operationLimitExceeded;
        return this;
    }
    public Long statusCode;
    public DeleteTagsForDomainResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedTLD;
    public DeleteTagsForDomainResponse withUnsupportedTld(Object unsupportedTLD) {
        this.unsupportedTLD = unsupportedTLD;
        return this;
    }
}