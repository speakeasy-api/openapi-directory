package openapisdk.models.operations;



public class StartTaskResponse {
    public Object clientException;
    public StartTaskResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public Object clusterNotFoundException;
    public StartTaskResponse withClusterNotFoundException(Object clusterNotFoundException) {
        this.clusterNotFoundException = clusterNotFoundException;
        return this;
    }
    public String contentType;
    public StartTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public StartTaskResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serverException;
    public StartTaskResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public openapisdk.models.shared.StartTaskResponse startTaskResponse;
    public StartTaskResponse withStartTaskResponse(openapisdk.models.shared.StartTaskResponse startTaskResponse) {
        this.startTaskResponse = startTaskResponse;
        return this;
    }
    public Long statusCode;
    public StartTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}