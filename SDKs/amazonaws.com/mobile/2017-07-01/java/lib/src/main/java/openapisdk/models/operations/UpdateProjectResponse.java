package openapisdk.models.operations;



public class UpdateProjectResponse {
    public openapisdk.models.shared.AccountActionRequiredException accountActionRequiredException;
    public UpdateProjectResponse withAccountActionRequiredException(openapisdk.models.shared.AccountActionRequiredException accountActionRequiredException) {
        this.accountActionRequiredException = accountActionRequiredException;
        return this;
    }
    public openapisdk.models.shared.BadRequestException badRequestException;
    public UpdateProjectResponse withBadRequestException(openapisdk.models.shared.BadRequestException badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public UpdateProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InternalFailureException internalFailureException;
    public UpdateProjectResponse withInternalFailureException(openapisdk.models.shared.InternalFailureException internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public openapisdk.models.shared.LimitExceededException limitExceededException;
    public UpdateProjectResponse withLimitExceededException(openapisdk.models.shared.LimitExceededException limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.NotFoundException notFoundException;
    public UpdateProjectResponse withNotFoundException(openapisdk.models.shared.NotFoundException notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public openapisdk.models.shared.ServiceUnavailableException serviceUnavailableException;
    public UpdateProjectResponse withServiceUnavailableException(openapisdk.models.shared.ServiceUnavailableException serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public UpdateProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TooManyRequestsException tooManyRequestsException;
    public UpdateProjectResponse withTooManyRequestsException(openapisdk.models.shared.TooManyRequestsException tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public openapisdk.models.shared.UnauthorizedException unauthorizedException;
    public UpdateProjectResponse withUnauthorizedException(openapisdk.models.shared.UnauthorizedException unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
    public openapisdk.models.shared.UpdateProjectResult updateProjectResult;
    public UpdateProjectResponse withUpdateProjectResult(openapisdk.models.shared.UpdateProjectResult updateProjectResult) {
        this.updateProjectResult = updateProjectResult;
        return this;
    }
}