package openapisdk.models.operations;



public class ListFleetsResponse {
    public String contentType;
    public ListFleetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerErrorException;
    public ListFleetsResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object invalidRequestException;
    public ListFleetsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListFleetsResponse listFleetsResponse;
    public ListFleetsResponse withListFleetsResponse(openapisdk.models.shared.ListFleetsResponse listFleetsResponse) {
        this.listFleetsResponse = listFleetsResponse;
        return this;
    }
    public Long statusCode;
    public ListFleetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListFleetsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object unauthorizedException;
    public ListFleetsResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}