package openapisdk.models.operations;



public class ListSimulationApplicationsResponse {
    public String contentType;
    public ListSimulationApplicationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListSimulationApplicationsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public ListSimulationApplicationsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListSimulationApplicationsResponse listSimulationApplicationsResponse;
    public ListSimulationApplicationsResponse withListSimulationApplicationsResponse(openapisdk.models.shared.ListSimulationApplicationsResponse listSimulationApplicationsResponse) {
        this.listSimulationApplicationsResponse = listSimulationApplicationsResponse;
        return this;
    }
    public Long statusCode;
    public ListSimulationApplicationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListSimulationApplicationsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}