package openapisdk.models.operations;



public class ListByoipCidrsResponse {
    public Object accessDeniedException;
    public ListByoipCidrsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListByoipCidrsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public ListByoipCidrsResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidArgumentException;
    public ListByoipCidrsResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object invalidNextTokenException;
    public ListByoipCidrsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListByoipCidrsResponse listByoipCidrsResponse;
    public ListByoipCidrsResponse withListByoipCidrsResponse(openapisdk.models.shared.ListByoipCidrsResponse listByoipCidrsResponse) {
        this.listByoipCidrsResponse = listByoipCidrsResponse;
        return this;
    }
    public Long statusCode;
    public ListByoipCidrsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}