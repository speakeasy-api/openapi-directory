package openapisdk.models.operations;



public class RequestUploadCredentialsResponse {
    public String contentType;
    public RequestUploadCredentialsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public RequestUploadCredentialsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public RequestUploadCredentialsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public RequestUploadCredentialsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public openapisdk.models.shared.RequestUploadCredentialsOutput requestUploadCredentialsOutput;
    public RequestUploadCredentialsResponse withRequestUploadCredentialsOutput(openapisdk.models.shared.RequestUploadCredentialsOutput requestUploadCredentialsOutput) {
        this.requestUploadCredentialsOutput = requestUploadCredentialsOutput;
        return this;
    }
    public Long statusCode;
    public RequestUploadCredentialsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public RequestUploadCredentialsResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}