package openapisdk.models.operations;



public class DeleteBranchResponse {
    public Object badRequestException;
    public DeleteBranchResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DeleteBranchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteBranchResult deleteBranchResult;
    public DeleteBranchResponse withDeleteBranchResult(openapisdk.models.shared.DeleteBranchResult deleteBranchResult) {
        this.deleteBranchResult = deleteBranchResult;
        return this;
    }
    public Object dependentServiceFailureException;
    public DeleteBranchResponse withDependentServiceFailureException(Object dependentServiceFailureException) {
        this.dependentServiceFailureException = dependentServiceFailureException;
        return this;
    }
    public Object internalFailureException;
    public DeleteBranchResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object notFoundException;
    public DeleteBranchResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteBranchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public DeleteBranchResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}