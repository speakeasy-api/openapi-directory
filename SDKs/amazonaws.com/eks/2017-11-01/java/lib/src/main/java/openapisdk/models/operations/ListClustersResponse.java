package openapisdk.models.operations;



public class ListClustersResponse {
    public Object clientException;
    public ListClustersResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public ListClustersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public ListClustersResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListClustersResponse listClustersResponse;
    public ListClustersResponse withListClustersResponse(openapisdk.models.shared.ListClustersResponse listClustersResponse) {
        this.listClustersResponse = listClustersResponse;
        return this;
    }
    public Object serverException;
    public ListClustersResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListClustersResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListClustersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}