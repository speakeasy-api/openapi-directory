package openapisdk.models.operations;



public class DeleteTrustResponse {
    public Object clientException;
    public DeleteTrustResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DeleteTrustResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteTrustResult deleteTrustResult;
    public DeleteTrustResponse withDeleteTrustResult(openapisdk.models.shared.DeleteTrustResult deleteTrustResult) {
        this.deleteTrustResult = deleteTrustResult;
        return this;
    }
    public Object entityDoesNotExistException;
    public DeleteTrustResponse withEntityDoesNotExistException(Object entityDoesNotExistException) {
        this.entityDoesNotExistException = entityDoesNotExistException;
        return this;
    }
    public Object invalidParameterException;
    public DeleteTrustResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serviceException;
    public DeleteTrustResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public DeleteTrustResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public DeleteTrustResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}