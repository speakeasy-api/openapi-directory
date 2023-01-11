package openapisdk.models.operations;



public class IncreaseStreamRetentionPeriodResponse {
    public String contentType;
    public IncreaseStreamRetentionPeriodResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArgumentException;
    public IncreaseStreamRetentionPeriodResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object limitExceededException;
    public IncreaseStreamRetentionPeriodResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceInUseException;
    public IncreaseStreamRetentionPeriodResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public IncreaseStreamRetentionPeriodResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public IncreaseStreamRetentionPeriodResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}