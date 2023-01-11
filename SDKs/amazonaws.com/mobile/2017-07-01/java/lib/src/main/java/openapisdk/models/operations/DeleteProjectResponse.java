package openapisdk.models.operations;



public class DeleteProjectResponse {
    public String contentType;
    public DeleteProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteProjectResult deleteProjectResult;
    public DeleteProjectResponse withDeleteProjectResult(openapisdk.models.shared.DeleteProjectResult deleteProjectResult) {
        this.deleteProjectResult = deleteProjectResult;
        return this;
    }
    public openapisdk.models.shared.InternalFailureException internalFailureException;
    public DeleteProjectResponse withInternalFailureException(openapisdk.models.shared.InternalFailureException internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public openapisdk.models.shared.NotFoundException notFoundException;
    public DeleteProjectResponse withNotFoundException(openapisdk.models.shared.NotFoundException notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public openapisdk.models.shared.ServiceUnavailableException serviceUnavailableException;
    public DeleteProjectResponse withServiceUnavailableException(openapisdk.models.shared.ServiceUnavailableException serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DeleteProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TooManyRequestsException tooManyRequestsException;
    public DeleteProjectResponse withTooManyRequestsException(openapisdk.models.shared.TooManyRequestsException tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public openapisdk.models.shared.UnauthorizedException unauthorizedException;
    public DeleteProjectResponse withUnauthorizedException(openapisdk.models.shared.UnauthorizedException unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}