package openapisdk.models.operations;



public class ListAttributesResponse {
    public Object clusterNotFoundException;
    public ListAttributesResponse withClusterNotFoundException(Object clusterNotFoundException) {
        this.clusterNotFoundException = clusterNotFoundException;
        return this;
    }
    public String contentType;
    public ListAttributesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public ListAttributesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListAttributesResponse listAttributesResponse;
    public ListAttributesResponse withListAttributesResponse(openapisdk.models.shared.ListAttributesResponse listAttributesResponse) {
        this.listAttributesResponse = listAttributesResponse;
        return this;
    }
    public Long statusCode;
    public ListAttributesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}