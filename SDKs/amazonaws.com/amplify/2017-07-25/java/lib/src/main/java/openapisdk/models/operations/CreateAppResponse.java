package openapisdk.models.operations;



public class CreateAppResponse {
    public Object badRequestException;
    public CreateAppResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public CreateAppResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateAppResult createAppResult;
    public CreateAppResponse withCreateAppResult(openapisdk.models.shared.CreateAppResult createAppResult) {
        this.createAppResult = createAppResult;
        return this;
    }
    public Object dependentServiceFailureException;
    public CreateAppResponse withDependentServiceFailureException(Object dependentServiceFailureException) {
        this.dependentServiceFailureException = dependentServiceFailureException;
        return this;
    }
    public Object internalFailureException;
    public CreateAppResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public CreateAppResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateAppResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public CreateAppResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}