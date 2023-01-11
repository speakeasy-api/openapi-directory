package openapisdk.models.operations;



public class DecreaseStreamRetentionPeriodResponse {
    public String contentType;
    public DecreaseStreamRetentionPeriodResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArgumentException;
    public DecreaseStreamRetentionPeriodResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object limitExceededException;
    public DecreaseStreamRetentionPeriodResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceInUseException;
    public DecreaseStreamRetentionPeriodResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public DecreaseStreamRetentionPeriodResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DecreaseStreamRetentionPeriodResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}