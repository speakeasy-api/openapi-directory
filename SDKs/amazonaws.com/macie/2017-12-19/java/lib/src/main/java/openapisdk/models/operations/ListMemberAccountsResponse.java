package openapisdk.models.operations;



public class ListMemberAccountsResponse {
    public String contentType;
    public ListMemberAccountsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public ListMemberAccountsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidInputException;
    public ListMemberAccountsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public openapisdk.models.shared.ListMemberAccountsResult listMemberAccountsResult;
    public ListMemberAccountsResponse withListMemberAccountsResult(openapisdk.models.shared.ListMemberAccountsResult listMemberAccountsResult) {
        this.listMemberAccountsResult = listMemberAccountsResult;
        return this;
    }
    public Long statusCode;
    public ListMemberAccountsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}