package openapisdk.models.operations;



public class ListTagsForDomainResponse {
    public String contentType;
    public ListTagsForDomainResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInput;
    public ListTagsForDomainResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public openapisdk.models.shared.ListTagsForDomainResponse listTagsForDomainResponse;
    public ListTagsForDomainResponse withListTagsForDomainResponse(openapisdk.models.shared.ListTagsForDomainResponse listTagsForDomainResponse) {
        this.listTagsForDomainResponse = listTagsForDomainResponse;
        return this;
    }
    public Object operationLimitExceeded;
    public ListTagsForDomainResponse withOperationLimitExceeded(Object operationLimitExceeded) {
        this.operationLimitExceeded = operationLimitExceeded;
        return this;
    }
    public Long statusCode;
    public ListTagsForDomainResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedTLD;
    public ListTagsForDomainResponse withUnsupportedTld(Object unsupportedTLD) {
        this.unsupportedTLD = unsupportedTLD;
        return this;
    }
}