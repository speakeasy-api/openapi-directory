package openapisdk.models.operations;



public class ListAttacksResponse {
    public String contentType;
    public ListAttacksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public ListAttacksResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidOperationException;
    public ListAttacksResponse withInvalidOperationException(Object invalidOperationException) {
        this.invalidOperationException = invalidOperationException;
        return this;
    }
    public Object invalidParameterException;
    public ListAttacksResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListAttacksResponse listAttacksResponse;
    public ListAttacksResponse withListAttacksResponse(openapisdk.models.shared.ListAttacksResponse listAttacksResponse) {
        this.listAttacksResponse = listAttacksResponse;
        return this;
    }
    public Long statusCode;
    public ListAttacksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}