package openapisdk.models.operations;



public class ListBranchesResponse {
    public Object badRequestException;
    public ListBranchesResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListBranchesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListBranchesResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public openapisdk.models.shared.ListBranchesResult listBranchesResult;
    public ListBranchesResponse withListBranchesResult(openapisdk.models.shared.ListBranchesResult listBranchesResult) {
        this.listBranchesResult = listBranchesResult;
        return this;
    }
    public Long statusCode;
    public ListBranchesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public ListBranchesResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}