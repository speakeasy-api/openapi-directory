package openapisdk.models.operations;



public class ListTaskExecutionsResponse {
    public String contentType;
    public ListTaskExecutionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public ListTaskExecutionsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidRequestException;
    public ListTaskExecutionsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListTaskExecutionsResponse listTaskExecutionsResponse;
    public ListTaskExecutionsResponse withListTaskExecutionsResponse(openapisdk.models.shared.ListTaskExecutionsResponse listTaskExecutionsResponse) {
        this.listTaskExecutionsResponse = listTaskExecutionsResponse;
        return this;
    }
    public Long statusCode;
    public ListTaskExecutionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}