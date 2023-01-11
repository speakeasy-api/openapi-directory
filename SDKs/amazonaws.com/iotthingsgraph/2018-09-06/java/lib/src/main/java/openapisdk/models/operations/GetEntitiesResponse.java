package openapisdk.models.operations;



public class GetEntitiesResponse {
    public String contentType;
    public GetEntitiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetEntitiesResponse getEntitiesResponse;
    public GetEntitiesResponse withGetEntitiesResponse(openapisdk.models.shared.GetEntitiesResponse getEntitiesResponse) {
        this.getEntitiesResponse = getEntitiesResponse;
        return this;
    }
    public Object internalFailureException;
    public GetEntitiesResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public GetEntitiesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetEntitiesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetEntitiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetEntitiesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}