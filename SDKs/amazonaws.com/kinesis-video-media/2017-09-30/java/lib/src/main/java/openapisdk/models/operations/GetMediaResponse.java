package openapisdk.models.operations;



public class GetMediaResponse {
    public Object clientLimitExceededException;
    public GetMediaResponse withClientLimitExceededException(Object clientLimitExceededException) {
        this.clientLimitExceededException = clientLimitExceededException;
        return this;
    }
    public Object connectionLimitExceededException;
    public GetMediaResponse withConnectionLimitExceededException(Object connectionLimitExceededException) {
        this.connectionLimitExceededException = connectionLimitExceededException;
        return this;
    }
    public String contentType;
    public GetMediaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetMediaOutput getMediaOutput;
    public GetMediaResponse withGetMediaOutput(openapisdk.models.shared.GetMediaOutput getMediaOutput) {
        this.getMediaOutput = getMediaOutput;
        return this;
    }
    public Object invalidArgumentException;
    public GetMediaResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object invalidEndpointException;
    public GetMediaResponse withInvalidEndpointException(Object invalidEndpointException) {
        this.invalidEndpointException = invalidEndpointException;
        return this;
    }
    public Object notAuthorizedException;
    public GetMediaResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetMediaResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetMediaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}