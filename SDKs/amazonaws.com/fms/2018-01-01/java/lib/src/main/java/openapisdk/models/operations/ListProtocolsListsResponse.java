package openapisdk.models.operations;



public class ListProtocolsListsResponse {
    public String contentType;
    public ListProtocolsListsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public ListProtocolsListsResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidOperationException;
    public ListProtocolsListsResponse withInvalidOperationException(Object invalidOperationException) {
        this.invalidOperationException = invalidOperationException;
        return this;
    }
    public openapisdk.models.shared.ListProtocolsListsResponse listProtocolsListsResponse;
    public ListProtocolsListsResponse withListProtocolsListsResponse(openapisdk.models.shared.ListProtocolsListsResponse listProtocolsListsResponse) {
        this.listProtocolsListsResponse = listProtocolsListsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListProtocolsListsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListProtocolsListsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}