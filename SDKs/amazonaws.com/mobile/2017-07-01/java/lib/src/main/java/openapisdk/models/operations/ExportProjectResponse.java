package openapisdk.models.operations;



public class ExportProjectResponse {
    public openapisdk.models.shared.BadRequestException badRequestException;
    public ExportProjectResponse withBadRequestException(openapisdk.models.shared.BadRequestException badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ExportProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ExportProjectResult exportProjectResult;
    public ExportProjectResponse withExportProjectResult(openapisdk.models.shared.ExportProjectResult exportProjectResult) {
        this.exportProjectResult = exportProjectResult;
        return this;
    }
    public openapisdk.models.shared.InternalFailureException internalFailureException;
    public ExportProjectResponse withInternalFailureException(openapisdk.models.shared.InternalFailureException internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public openapisdk.models.shared.NotFoundException notFoundException;
    public ExportProjectResponse withNotFoundException(openapisdk.models.shared.NotFoundException notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public openapisdk.models.shared.ServiceUnavailableException serviceUnavailableException;
    public ExportProjectResponse withServiceUnavailableException(openapisdk.models.shared.ServiceUnavailableException serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ExportProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TooManyRequestsException tooManyRequestsException;
    public ExportProjectResponse withTooManyRequestsException(openapisdk.models.shared.TooManyRequestsException tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public openapisdk.models.shared.UnauthorizedException unauthorizedException;
    public ExportProjectResponse withUnauthorizedException(openapisdk.models.shared.UnauthorizedException unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}