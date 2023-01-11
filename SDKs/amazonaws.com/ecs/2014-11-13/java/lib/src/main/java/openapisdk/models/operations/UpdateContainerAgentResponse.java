package openapisdk.models.operations;



public class UpdateContainerAgentResponse {
    public Object clientException;
    public UpdateContainerAgentResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public Object clusterNotFoundException;
    public UpdateContainerAgentResponse withClusterNotFoundException(Object clusterNotFoundException) {
        this.clusterNotFoundException = clusterNotFoundException;
        return this;
    }
    public String contentType;
    public UpdateContainerAgentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public UpdateContainerAgentResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object missingVersionException;
    public UpdateContainerAgentResponse withMissingVersionException(Object missingVersionException) {
        this.missingVersionException = missingVersionException;
        return this;
    }
    public Object noUpdateAvailableException;
    public UpdateContainerAgentResponse withNoUpdateAvailableException(Object noUpdateAvailableException) {
        this.noUpdateAvailableException = noUpdateAvailableException;
        return this;
    }
    public Object serverException;
    public UpdateContainerAgentResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public UpdateContainerAgentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateContainerAgentResponse updateContainerAgentResponse;
    public UpdateContainerAgentResponse withUpdateContainerAgentResponse(openapisdk.models.shared.UpdateContainerAgentResponse updateContainerAgentResponse) {
        this.updateContainerAgentResponse = updateContainerAgentResponse;
        return this;
    }
    public Object updateInProgressException;
    public UpdateContainerAgentResponse withUpdateInProgressException(Object updateInProgressException) {
        this.updateInProgressException = updateInProgressException;
        return this;
    }
}