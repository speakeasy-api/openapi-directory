package openapisdk.models.operations;



public class PutRemediationExceptionsResponse {
    public String contentType;
    public PutRemediationExceptionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object insufficientPermissionsException;
    public PutRemediationExceptionsResponse withInsufficientPermissionsException(Object insufficientPermissionsException) {
        this.insufficientPermissionsException = insufficientPermissionsException;
        return this;
    }
    public Object invalidParameterValueException;
    public PutRemediationExceptionsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public openapisdk.models.shared.PutRemediationExceptionsResponse putRemediationExceptionsResponse;
    public PutRemediationExceptionsResponse withPutRemediationExceptionsResponse(openapisdk.models.shared.PutRemediationExceptionsResponse putRemediationExceptionsResponse) {
        this.putRemediationExceptionsResponse = putRemediationExceptionsResponse;
        return this;
    }
    public Long statusCode;
    public PutRemediationExceptionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}