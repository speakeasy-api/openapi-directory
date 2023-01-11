package openapisdk.models.operations;



public class ListWorkerConfigurationsResponse {
    public Object badRequestException;
    public ListWorkerConfigurationsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListWorkerConfigurationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public ListWorkerConfigurationsResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public ListWorkerConfigurationsResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public openapisdk.models.shared.ListWorkerConfigurationsResponse listWorkerConfigurationsResponse;
    public ListWorkerConfigurationsResponse withListWorkerConfigurationsResponse(openapisdk.models.shared.ListWorkerConfigurationsResponse listWorkerConfigurationsResponse) {
        this.listWorkerConfigurationsResponse = listWorkerConfigurationsResponse;
        return this;
    }
    public Object notFoundException;
    public ListWorkerConfigurationsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListWorkerConfigurationsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListWorkerConfigurationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListWorkerConfigurationsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object unauthorizedException;
    public ListWorkerConfigurationsResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}