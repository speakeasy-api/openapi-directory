package openapisdk.models.operations;



public class CreateBranchResponse {
    public Object badRequestException;
    public CreateBranchResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public CreateBranchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateBranchResult createBranchResult;
    public CreateBranchResponse withCreateBranchResult(openapisdk.models.shared.CreateBranchResult createBranchResult) {
        this.createBranchResult = createBranchResult;
        return this;
    }
    public Object dependentServiceFailureException;
    public CreateBranchResponse withDependentServiceFailureException(Object dependentServiceFailureException) {
        this.dependentServiceFailureException = dependentServiceFailureException;
        return this;
    }
    public Object internalFailureException;
    public CreateBranchResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public CreateBranchResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public CreateBranchResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CreateBranchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public CreateBranchResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}