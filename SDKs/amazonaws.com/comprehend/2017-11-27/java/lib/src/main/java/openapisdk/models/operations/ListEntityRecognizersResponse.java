package openapisdk.models.operations;



public class ListEntityRecognizersResponse {
    public String contentType;
    public ListEntityRecognizersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListEntityRecognizersResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidFilterException;
    public ListEntityRecognizersResponse withInvalidFilterException(Object invalidFilterException) {
        this.invalidFilterException = invalidFilterException;
        return this;
    }
    public Object invalidRequestException;
    public ListEntityRecognizersResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListEntityRecognizersResponse listEntityRecognizersResponse;
    public ListEntityRecognizersResponse withListEntityRecognizersResponse(openapisdk.models.shared.ListEntityRecognizersResponse listEntityRecognizersResponse) {
        this.listEntityRecognizersResponse = listEntityRecognizersResponse;
        return this;
    }
    public Long statusCode;
    public ListEntityRecognizersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListEntityRecognizersResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}