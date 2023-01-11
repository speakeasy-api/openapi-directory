package openapisdk.models.operations;



public class ListMemberAccountsResponse {
    public String contentType;
    public ListMemberAccountsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public ListMemberAccountsResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public openapisdk.models.shared.ListMemberAccountsResponse listMemberAccountsResponse;
    public ListMemberAccountsResponse withListMemberAccountsResponse(openapisdk.models.shared.ListMemberAccountsResponse listMemberAccountsResponse) {
        this.listMemberAccountsResponse = listMemberAccountsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListMemberAccountsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListMemberAccountsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}