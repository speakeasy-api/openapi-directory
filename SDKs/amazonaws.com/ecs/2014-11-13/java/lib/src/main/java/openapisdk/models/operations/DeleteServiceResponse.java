package openapisdk.models.operations;



public class DeleteServiceResponse {
    public Object clientException;
    public DeleteServiceResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public Object clusterNotFoundException;
    public DeleteServiceResponse withClusterNotFoundException(Object clusterNotFoundException) {
        this.clusterNotFoundException = clusterNotFoundException;
        return this;
    }
    public String contentType;
    public DeleteServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteServiceResponse deleteServiceResponse;
    public DeleteServiceResponse withDeleteServiceResponse(openapisdk.models.shared.DeleteServiceResponse deleteServiceResponse) {
        this.deleteServiceResponse = deleteServiceResponse;
        return this;
    }
    public Object invalidParameterException;
    public DeleteServiceResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serverException;
    public DeleteServiceResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Object serviceNotFoundException;
    public DeleteServiceResponse withServiceNotFoundException(Object serviceNotFoundException) {
        this.serviceNotFoundException = serviceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}