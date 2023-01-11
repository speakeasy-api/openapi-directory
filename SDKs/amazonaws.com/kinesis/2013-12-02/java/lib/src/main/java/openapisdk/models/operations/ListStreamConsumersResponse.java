package openapisdk.models.operations;



public class ListStreamConsumersResponse {
    public String contentType;
    public ListStreamConsumersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object expiredNextTokenException;
    public ListStreamConsumersResponse withExpiredNextTokenException(Object expiredNextTokenException) {
        this.expiredNextTokenException = expiredNextTokenException;
        return this;
    }
    public Object invalidArgumentException;
    public ListStreamConsumersResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object limitExceededException;
    public ListStreamConsumersResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListStreamConsumersOutput listStreamConsumersOutput;
    public ListStreamConsumersResponse withListStreamConsumersOutput(openapisdk.models.shared.ListStreamConsumersOutput listStreamConsumersOutput) {
        this.listStreamConsumersOutput = listStreamConsumersOutput;
        return this;
    }
    public Object resourceInUseException;
    public ListStreamConsumersResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public ListStreamConsumersResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListStreamConsumersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}