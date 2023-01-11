package openapisdk.models.operations;



public class DescribeAccountOverviewResponse {
    public Object accessDeniedException;
    public DescribeAccountOverviewResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeAccountOverviewResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAccountOverviewResponse describeAccountOverviewResponse;
    public DescribeAccountOverviewResponse withDescribeAccountOverviewResponse(openapisdk.models.shared.DescribeAccountOverviewResponse describeAccountOverviewResponse) {
        this.describeAccountOverviewResponse = describeAccountOverviewResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeAccountOverviewResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public DescribeAccountOverviewResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeAccountOverviewResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeAccountOverviewResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}