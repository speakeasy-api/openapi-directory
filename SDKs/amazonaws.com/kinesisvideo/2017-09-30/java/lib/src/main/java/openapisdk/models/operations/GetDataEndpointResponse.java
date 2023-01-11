package openapisdk.models.operations;



public class GetDataEndpointResponse {
    public Object clientLimitExceededException;
    public GetDataEndpointResponse withClientLimitExceededException(Object clientLimitExceededException) {
        this.clientLimitExceededException = clientLimitExceededException;
        return this;
    }
    public String contentType;
    public GetDataEndpointResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDataEndpointOutput getDataEndpointOutput;
    public GetDataEndpointResponse withGetDataEndpointOutput(openapisdk.models.shared.GetDataEndpointOutput getDataEndpointOutput) {
        this.getDataEndpointOutput = getDataEndpointOutput;
        return this;
    }
    public Object invalidArgumentException;
    public GetDataEndpointResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object notAuthorizedException;
    public GetDataEndpointResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetDataEndpointResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetDataEndpointResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}