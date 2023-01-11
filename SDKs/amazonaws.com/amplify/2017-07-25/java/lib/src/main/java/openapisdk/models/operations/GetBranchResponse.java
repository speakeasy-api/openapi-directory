package openapisdk.models.operations;



public class GetBranchResponse {
    public Object badRequestException;
    public GetBranchResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetBranchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetBranchResult getBranchResult;
    public GetBranchResponse withGetBranchResult(openapisdk.models.shared.GetBranchResult getBranchResult) {
        this.getBranchResult = getBranchResult;
        return this;
    }
    public Object internalFailureException;
    public GetBranchResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object notFoundException;
    public GetBranchResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetBranchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public GetBranchResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}