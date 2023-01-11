package openapisdk.models.operations;



public class ListShardsResponse {
    public String contentType;
    public ListShardsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object expiredNextTokenException;
    public ListShardsResponse withExpiredNextTokenException(Object expiredNextTokenException) {
        this.expiredNextTokenException = expiredNextTokenException;
        return this;
    }
    public Object invalidArgumentException;
    public ListShardsResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object limitExceededException;
    public ListShardsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListShardsOutput listShardsOutput;
    public ListShardsResponse withListShardsOutput(openapisdk.models.shared.ListShardsOutput listShardsOutput) {
        this.listShardsOutput = listShardsOutput;
        return this;
    }
    public Object resourceInUseException;
    public ListShardsResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public ListShardsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListShardsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}