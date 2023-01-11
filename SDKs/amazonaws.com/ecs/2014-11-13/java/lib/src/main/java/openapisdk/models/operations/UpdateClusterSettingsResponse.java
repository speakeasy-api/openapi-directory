package openapisdk.models.operations;



public class UpdateClusterSettingsResponse {
    public Object clientException;
    public UpdateClusterSettingsResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public Object clusterNotFoundException;
    public UpdateClusterSettingsResponse withClusterNotFoundException(Object clusterNotFoundException) {
        this.clusterNotFoundException = clusterNotFoundException;
        return this;
    }
    public String contentType;
    public UpdateClusterSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public UpdateClusterSettingsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serverException;
    public UpdateClusterSettingsResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public UpdateClusterSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateClusterSettingsResponse updateClusterSettingsResponse;
    public UpdateClusterSettingsResponse withUpdateClusterSettingsResponse(openapisdk.models.shared.UpdateClusterSettingsResponse updateClusterSettingsResponse) {
        this.updateClusterSettingsResponse = updateClusterSettingsResponse;
        return this;
    }
}