package openapisdk.models.operations;



public class UpdateBranchResponse {
    public Object badRequestException;
    public UpdateBranchResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public UpdateBranchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependentServiceFailureException;
    public UpdateBranchResponse withDependentServiceFailureException(Object dependentServiceFailureException) {
        this.dependentServiceFailureException = dependentServiceFailureException;
        return this;
    }
    public Object internalFailureException;
    public UpdateBranchResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object notFoundException;
    public UpdateBranchResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateBranchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public UpdateBranchResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
    public openapisdk.models.shared.UpdateBranchResult updateBranchResult;
    public UpdateBranchResponse withUpdateBranchResult(openapisdk.models.shared.UpdateBranchResult updateBranchResult) {
        this.updateBranchResult = updateBranchResult;
        return this;
    }
}