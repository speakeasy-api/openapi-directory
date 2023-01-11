package openapisdk.models.operations;



public class ListResourcesResponse {
    public String contentType;
    public ListResourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidNextTokenException;
    public ListResourcesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterException;
    public ListResourcesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidResourceTypeException;
    public ListResourcesResponse withInvalidResourceTypeException(Object invalidResourceTypeException) {
        this.invalidResourceTypeException = invalidResourceTypeException;
        return this;
    }
    public openapisdk.models.shared.ListResourcesResponse listResourcesResponse;
    public ListResourcesResponse withListResourcesResponse(openapisdk.models.shared.ListResourcesResponse listResourcesResponse) {
        this.listResourcesResponse = listResourcesResponse;
        return this;
    }
    public Object malformedArnException;
    public ListResourcesResponse withMalformedArnException(Object malformedArnException) {
        this.malformedArnException = malformedArnException;
        return this;
    }
    public Object serverInternalException;
    public ListResourcesResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListResourcesResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListResourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unknownResourceException;
    public ListResourcesResponse withUnknownResourceException(Object unknownResourceException) {
        this.unknownResourceException = unknownResourceException;
        return this;
    }
}