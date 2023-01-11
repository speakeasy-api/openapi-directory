package openapisdk.models.operations;



public class UpdateClusterVersionResponse {
    public Object clientException;
    public UpdateClusterVersionResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public UpdateClusterVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public UpdateClusterVersionResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateClusterVersionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceInUseException;
    public UpdateClusterVersionResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateClusterVersionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serverException;
    public UpdateClusterVersionResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public UpdateClusterVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateClusterVersionResponse updateClusterVersionResponse;
    public UpdateClusterVersionResponse withUpdateClusterVersionResponse(openapisdk.models.shared.UpdateClusterVersionResponse updateClusterVersionResponse) {
        this.updateClusterVersionResponse = updateClusterVersionResponse;
        return this;
    }
}