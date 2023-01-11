package openapisdk.models.operations;



public class DescribeTextTranslationJobResponse {
    public String contentType;
    public DescribeTextTranslationJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeTextTranslationJobResponse describeTextTranslationJobResponse;
    public DescribeTextTranslationJobResponse withDescribeTextTranslationJobResponse(openapisdk.models.shared.DescribeTextTranslationJobResponse describeTextTranslationJobResponse) {
        this.describeTextTranslationJobResponse = describeTextTranslationJobResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeTextTranslationJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeTextTranslationJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeTextTranslationJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DescribeTextTranslationJobResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}