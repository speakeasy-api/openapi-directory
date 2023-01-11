package openapisdk.models.operations;



public class DescribeServiceIntegrationResponse {
    public Object accessDeniedException;
    public DescribeServiceIntegrationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeServiceIntegrationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeServiceIntegrationResponse describeServiceIntegrationResponse;
    public DescribeServiceIntegrationResponse withDescribeServiceIntegrationResponse(openapisdk.models.shared.DescribeServiceIntegrationResponse describeServiceIntegrationResponse) {
        this.describeServiceIntegrationResponse = describeServiceIntegrationResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeServiceIntegrationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public DescribeServiceIntegrationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeServiceIntegrationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeServiceIntegrationResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}