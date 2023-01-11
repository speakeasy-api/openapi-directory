package openapisdk.models.operations;



public class ListFleetsResponse {
    public String contentType;
    public ListFleetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public ListFleetsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public ListFleetsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListFleetsOutput listFleetsOutput;
    public ListFleetsResponse withListFleetsOutput(openapisdk.models.shared.ListFleetsOutput listFleetsOutput) {
        this.listFleetsOutput = listFleetsOutput;
        return this;
    }
    public Object notFoundException;
    public ListFleetsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public ListFleetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public ListFleetsResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}