package openapisdk.models.operations;



public class ListBundlesResponse {
    public openapisdk.models.shared.BadRequestException badRequestException;
    public ListBundlesResponse withBadRequestException(openapisdk.models.shared.BadRequestException badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListBundlesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InternalFailureException internalFailureException;
    public ListBundlesResponse withInternalFailureException(openapisdk.models.shared.InternalFailureException internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public openapisdk.models.shared.ListBundlesResult listBundlesResult;
    public ListBundlesResponse withListBundlesResult(openapisdk.models.shared.ListBundlesResult listBundlesResult) {
        this.listBundlesResult = listBundlesResult;
        return this;
    }
    public openapisdk.models.shared.ServiceUnavailableException serviceUnavailableException;
    public ListBundlesResponse withServiceUnavailableException(openapisdk.models.shared.ServiceUnavailableException serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListBundlesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TooManyRequestsException tooManyRequestsException;
    public ListBundlesResponse withTooManyRequestsException(openapisdk.models.shared.TooManyRequestsException tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public openapisdk.models.shared.UnauthorizedException unauthorizedException;
    public ListBundlesResponse withUnauthorizedException(openapisdk.models.shared.UnauthorizedException unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}