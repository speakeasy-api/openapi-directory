package openapisdk.models.operations;



public class GetProductsResponse {
    public String contentType;
    public GetProductsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object expiredNextTokenException;
    public GetProductsResponse withExpiredNextTokenException(Object expiredNextTokenException) {
        this.expiredNextTokenException = expiredNextTokenException;
        return this;
    }
    public openapisdk.models.shared.GetProductsResponse getProductsResponse;
    public GetProductsResponse withGetProductsResponse(openapisdk.models.shared.GetProductsResponse getProductsResponse) {
        this.getProductsResponse = getProductsResponse;
        return this;
    }
    public Object internalErrorException;
    public GetProductsResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidNextTokenException;
    public GetProductsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterException;
    public GetProductsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notFoundException;
    public GetProductsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetProductsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}