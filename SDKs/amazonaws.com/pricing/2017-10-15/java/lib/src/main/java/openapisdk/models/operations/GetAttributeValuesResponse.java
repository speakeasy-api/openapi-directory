package openapisdk.models.operations;



public class GetAttributeValuesResponse {
    public String contentType;
    public GetAttributeValuesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object expiredNextTokenException;
    public GetAttributeValuesResponse withExpiredNextTokenException(Object expiredNextTokenException) {
        this.expiredNextTokenException = expiredNextTokenException;
        return this;
    }
    public openapisdk.models.shared.GetAttributeValuesResponse getAttributeValuesResponse;
    public GetAttributeValuesResponse withGetAttributeValuesResponse(openapisdk.models.shared.GetAttributeValuesResponse getAttributeValuesResponse) {
        this.getAttributeValuesResponse = getAttributeValuesResponse;
        return this;
    }
    public Object internalErrorException;
    public GetAttributeValuesResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidNextTokenException;
    public GetAttributeValuesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterException;
    public GetAttributeValuesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notFoundException;
    public GetAttributeValuesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetAttributeValuesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}