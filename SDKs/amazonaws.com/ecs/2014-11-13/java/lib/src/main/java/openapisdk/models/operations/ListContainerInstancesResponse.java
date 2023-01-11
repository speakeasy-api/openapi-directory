package openapisdk.models.operations;



public class ListContainerInstancesResponse {
    public Object clientException;
    public ListContainerInstancesResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public Object clusterNotFoundException;
    public ListContainerInstancesResponse withClusterNotFoundException(Object clusterNotFoundException) {
        this.clusterNotFoundException = clusterNotFoundException;
        return this;
    }
    public String contentType;
    public ListContainerInstancesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public ListContainerInstancesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListContainerInstancesResponse listContainerInstancesResponse;
    public ListContainerInstancesResponse withListContainerInstancesResponse(openapisdk.models.shared.ListContainerInstancesResponse listContainerInstancesResponse) {
        this.listContainerInstancesResponse = listContainerInstancesResponse;
        return this;
    }
    public Object serverException;
    public ListContainerInstancesResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public ListContainerInstancesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}