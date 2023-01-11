package openapisdk.models.operations;



public class StopTaskResponse {
    public Object clientException;
    public StopTaskResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public Object clusterNotFoundException;
    public StopTaskResponse withClusterNotFoundException(Object clusterNotFoundException) {
        this.clusterNotFoundException = clusterNotFoundException;
        return this;
    }
    public String contentType;
    public StopTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public StopTaskResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serverException;
    public StopTaskResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public StopTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StopTaskResponse stopTaskResponse;
    public StopTaskResponse withStopTaskResponse(openapisdk.models.shared.StopTaskResponse stopTaskResponse) {
        this.stopTaskResponse = stopTaskResponse;
        return this;
    }
}