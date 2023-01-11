package openapisdk.models.operations;



public class CreateStreamingUrlResponse {
    public String contentType;
    public CreateStreamingUrlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateStreamingUrlResult createStreamingURLResult;
    public CreateStreamingUrlResponse withCreateStreamingUrlResult(openapisdk.models.shared.CreateStreamingUrlResult createStreamingURLResult) {
        this.createStreamingURLResult = createStreamingURLResult;
        return this;
    }
    public Object invalidParameterCombinationException;
    public CreateStreamingUrlResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Object operationNotPermittedException;
    public CreateStreamingUrlResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Object resourceNotAvailableException;
    public CreateStreamingUrlResponse withResourceNotAvailableException(Object resourceNotAvailableException) {
        this.resourceNotAvailableException = resourceNotAvailableException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateStreamingUrlResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateStreamingUrlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}