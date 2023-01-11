package openapisdk.models.operations;



public class GetExportJobsResponse {
    public Object badRequestException;
    public GetExportJobsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetExportJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public GetExportJobsResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public openapisdk.models.shared.GetExportJobsResponse getExportJobsResponse;
    public GetExportJobsResponse withGetExportJobsResponse(openapisdk.models.shared.GetExportJobsResponse getExportJobsResponse) {
        this.getExportJobsResponse = getExportJobsResponse;
        return this;
    }
    public Object internalServerErrorException;
    public GetExportJobsResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object methodNotAllowedException;
    public GetExportJobsResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    public Object notFoundException;
    public GetExportJobsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object payloadTooLargeException;
    public GetExportJobsResponse withPayloadTooLargeException(Object payloadTooLargeException) {
        this.payloadTooLargeException = payloadTooLargeException;
        return this;
    }
    public Long statusCode;
    public GetExportJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetExportJobsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}