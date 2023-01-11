package openapisdk.models.operations;



public class ListTasksResponse {
    public Object clientException;
    public ListTasksResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public Object clusterNotFoundException;
    public ListTasksResponse withClusterNotFoundException(Object clusterNotFoundException) {
        this.clusterNotFoundException = clusterNotFoundException;
        return this;
    }
    public String contentType;
    public ListTasksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public ListTasksResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListTasksResponse listTasksResponse;
    public ListTasksResponse withListTasksResponse(openapisdk.models.shared.ListTasksResponse listTasksResponse) {
        this.listTasksResponse = listTasksResponse;
        return this;
    }
    public Object serverException;
    public ListTasksResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Object serviceNotFoundException;
    public ListTasksResponse withServiceNotFoundException(Object serviceNotFoundException) {
        this.serviceNotFoundException = serviceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListTasksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}