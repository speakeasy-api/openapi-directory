package openapisdk.models.operations;



public class GetInstanceAccessResponse {
    public String contentType;
    public GetInstanceAccessResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetInstanceAccessOutput getInstanceAccessOutput;
    public GetInstanceAccessResponse withGetInstanceAccessOutput(openapisdk.models.shared.GetInstanceAccessOutput getInstanceAccessOutput) {
        this.getInstanceAccessOutput = getInstanceAccessOutput;
        return this;
    }
    public Object internalServiceException;
    public GetInstanceAccessResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public GetInstanceAccessResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public GetInstanceAccessResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetInstanceAccessResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public GetInstanceAccessResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}