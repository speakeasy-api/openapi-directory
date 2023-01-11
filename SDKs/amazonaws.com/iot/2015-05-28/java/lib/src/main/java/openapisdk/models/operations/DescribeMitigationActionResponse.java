package openapisdk.models.operations;



public class DescribeMitigationActionResponse {
    public String contentType;
    public DescribeMitigationActionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeMitigationActionResponse describeMitigationActionResponse;
    public DescribeMitigationActionResponse withDescribeMitigationActionResponse(openapisdk.models.shared.DescribeMitigationActionResponse describeMitigationActionResponse) {
        this.describeMitigationActionResponse = describeMitigationActionResponse;
        return this;
    }
    public Object internalFailureException;
    public DescribeMitigationActionResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeMitigationActionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeMitigationActionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeMitigationActionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeMitigationActionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}