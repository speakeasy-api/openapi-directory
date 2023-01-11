package openapisdk.models.operations;



public class ListPrincipalsResponse {
    public String contentType;
    public ListPrincipalsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidNextTokenException;
    public ListPrincipalsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterException;
    public ListPrincipalsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListPrincipalsResponse listPrincipalsResponse;
    public ListPrincipalsResponse withListPrincipalsResponse(openapisdk.models.shared.ListPrincipalsResponse listPrincipalsResponse) {
        this.listPrincipalsResponse = listPrincipalsResponse;
        return this;
    }
    public Object malformedArnException;
    public ListPrincipalsResponse withMalformedArnException(Object malformedArnException) {
        this.malformedArnException = malformedArnException;
        return this;
    }
    public Object serverInternalException;
    public ListPrincipalsResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListPrincipalsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListPrincipalsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unknownResourceException;
    public ListPrincipalsResponse withUnknownResourceException(Object unknownResourceException) {
        this.unknownResourceException = unknownResourceException;
        return this;
    }
}