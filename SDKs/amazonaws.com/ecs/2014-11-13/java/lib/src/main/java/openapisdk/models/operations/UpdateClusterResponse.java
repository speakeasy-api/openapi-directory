package openapisdk.models.operations;



public class UpdateClusterResponse {
    public Object clientException;
    public UpdateClusterResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public Object clusterNotFoundException;
    public UpdateClusterResponse withClusterNotFoundException(Object clusterNotFoundException) {
        this.clusterNotFoundException = clusterNotFoundException;
        return this;
    }
    public String contentType;
    public UpdateClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public UpdateClusterResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serverException;
    public UpdateClusterResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public UpdateClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateClusterResponse updateClusterResponse;
    public UpdateClusterResponse withUpdateClusterResponse(openapisdk.models.shared.UpdateClusterResponse updateClusterResponse) {
        this.updateClusterResponse = updateClusterResponse;
        return this;
    }
}