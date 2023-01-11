package openapisdk.models.operations;



public class ListSimulationJobBatchesResponse {
    public String contentType;
    public ListSimulationJobBatchesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListSimulationJobBatchesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public ListSimulationJobBatchesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListSimulationJobBatchesResponse listSimulationJobBatchesResponse;
    public ListSimulationJobBatchesResponse withListSimulationJobBatchesResponse(openapisdk.models.shared.ListSimulationJobBatchesResponse listSimulationJobBatchesResponse) {
        this.listSimulationJobBatchesResponse = listSimulationJobBatchesResponse;
        return this;
    }
    public Long statusCode;
    public ListSimulationJobBatchesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}