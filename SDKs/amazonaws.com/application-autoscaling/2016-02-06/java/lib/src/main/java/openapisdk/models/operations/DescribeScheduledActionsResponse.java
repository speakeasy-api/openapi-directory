package openapisdk.models.operations;



public class DescribeScheduledActionsResponse {
    public Object concurrentUpdateException;
    public DescribeScheduledActionsResponse withConcurrentUpdateException(Object concurrentUpdateException) {
        this.concurrentUpdateException = concurrentUpdateException;
        return this;
    }
    public String contentType;
    public DescribeScheduledActionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeScheduledActionsResponse describeScheduledActionsResponse;
    public DescribeScheduledActionsResponse withDescribeScheduledActionsResponse(openapisdk.models.shared.DescribeScheduledActionsResponse describeScheduledActionsResponse) {
        this.describeScheduledActionsResponse = describeScheduledActionsResponse;
        return this;
    }
    public Object internalServiceException;
    public DescribeScheduledActionsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidNextTokenException;
    public DescribeScheduledActionsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Long statusCode;
    public DescribeScheduledActionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeScheduledActionsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}