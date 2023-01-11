package openapisdk.models.operations;



public class CreateClusterResponse {
    public Object clientException;
    public CreateClusterResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public CreateClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateClusterResponse createClusterResponse;
    public CreateClusterResponse withCreateClusterResponse(openapisdk.models.shared.CreateClusterResponse createClusterResponse) {
        this.createClusterResponse = createClusterResponse;
        return this;
    }
    public Object invalidParameterException;
    public CreateClusterResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serverException;
    public CreateClusterResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public CreateClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}