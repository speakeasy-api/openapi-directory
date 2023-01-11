package openapisdk.models.operations;



public class ListSimulationJobsResponse {
    public String contentType;
    public ListSimulationJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListSimulationJobsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public ListSimulationJobsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListSimulationJobsResponse listSimulationJobsResponse;
    public ListSimulationJobsResponse withListSimulationJobsResponse(openapisdk.models.shared.ListSimulationJobsResponse listSimulationJobsResponse) {
        this.listSimulationJobsResponse = listSimulationJobsResponse;
        return this;
    }
    public Long statusCode;
    public ListSimulationJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListSimulationJobsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}