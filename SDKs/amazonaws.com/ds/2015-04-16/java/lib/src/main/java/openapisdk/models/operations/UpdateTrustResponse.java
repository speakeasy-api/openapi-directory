package openapisdk.models.operations;



public class UpdateTrustResponse {
    public Object clientException;
    public UpdateTrustResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public UpdateTrustResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityDoesNotExistException;
    public UpdateTrustResponse withEntityDoesNotExistException(Object entityDoesNotExistException) {
        this.entityDoesNotExistException = entityDoesNotExistException;
        return this;
    }
    public Object invalidParameterException;
    public UpdateTrustResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serviceException;
    public UpdateTrustResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public UpdateTrustResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateTrustResult updateTrustResult;
    public UpdateTrustResponse withUpdateTrustResult(openapisdk.models.shared.UpdateTrustResult updateTrustResult) {
        this.updateTrustResult = updateTrustResult;
        return this;
    }
}