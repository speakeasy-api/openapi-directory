package openapisdk.models.operations;



public class ExportBundleResponse {
    public openapisdk.models.shared.BadRequestException badRequestException;
    public ExportBundleResponse withBadRequestException(openapisdk.models.shared.BadRequestException badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ExportBundleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ExportBundleResult exportBundleResult;
    public ExportBundleResponse withExportBundleResult(openapisdk.models.shared.ExportBundleResult exportBundleResult) {
        this.exportBundleResult = exportBundleResult;
        return this;
    }
    public openapisdk.models.shared.InternalFailureException internalFailureException;
    public ExportBundleResponse withInternalFailureException(openapisdk.models.shared.InternalFailureException internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public openapisdk.models.shared.NotFoundException notFoundException;
    public ExportBundleResponse withNotFoundException(openapisdk.models.shared.NotFoundException notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public openapisdk.models.shared.ServiceUnavailableException serviceUnavailableException;
    public ExportBundleResponse withServiceUnavailableException(openapisdk.models.shared.ServiceUnavailableException serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ExportBundleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TooManyRequestsException tooManyRequestsException;
    public ExportBundleResponse withTooManyRequestsException(openapisdk.models.shared.TooManyRequestsException tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public openapisdk.models.shared.UnauthorizedException unauthorizedException;
    public ExportBundleResponse withUnauthorizedException(openapisdk.models.shared.UnauthorizedException unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}