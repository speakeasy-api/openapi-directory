package openapisdk.models.operations;



public class VerifyTrustResponse {
    public Object clientException;
    public VerifyTrustResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public VerifyTrustResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityDoesNotExistException;
    public VerifyTrustResponse withEntityDoesNotExistException(Object entityDoesNotExistException) {
        this.entityDoesNotExistException = entityDoesNotExistException;
        return this;
    }
    public Object invalidParameterException;
    public VerifyTrustResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serviceException;
    public VerifyTrustResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public VerifyTrustResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public VerifyTrustResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
    public openapisdk.models.shared.VerifyTrustResult verifyTrustResult;
    public VerifyTrustResponse withVerifyTrustResult(openapisdk.models.shared.VerifyTrustResult verifyTrustResult) {
        this.verifyTrustResult = verifyTrustResult;
        return this;
    }
}