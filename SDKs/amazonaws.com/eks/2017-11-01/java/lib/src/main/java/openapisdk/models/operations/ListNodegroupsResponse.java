package openapisdk.models.operations;



public class ListNodegroupsResponse {
    public Object clientException;
    public ListNodegroupsResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public ListNodegroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public ListNodegroupsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListNodegroupsResponse listNodegroupsResponse;
    public ListNodegroupsResponse withListNodegroupsResponse(openapisdk.models.shared.ListNodegroupsResponse listNodegroupsResponse) {
        this.listNodegroupsResponse = listNodegroupsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListNodegroupsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serverException;
    public ListNodegroupsResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListNodegroupsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListNodegroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}