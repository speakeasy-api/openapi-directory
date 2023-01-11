package openapisdk.models.operations;



public class ListResourceTypesResponse {
    public String contentType;
    public ListResourceTypesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidNextTokenException;
    public ListResourceTypesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterException;
    public ListResourceTypesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListResourceTypesResponse listResourceTypesResponse;
    public ListResourceTypesResponse withListResourceTypesResponse(openapisdk.models.shared.ListResourceTypesResponse listResourceTypesResponse) {
        this.listResourceTypesResponse = listResourceTypesResponse;
        return this;
    }
    public Object serverInternalException;
    public ListResourceTypesResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListResourceTypesResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListResourceTypesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}