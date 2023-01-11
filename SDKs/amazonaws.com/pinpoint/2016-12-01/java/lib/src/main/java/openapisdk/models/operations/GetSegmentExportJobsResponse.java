package openapisdk.models.operations;



public class GetSegmentExportJobsResponse {
    public Object badRequestException;
    public GetSegmentExportJobsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetSegmentExportJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public GetSegmentExportJobsResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public openapisdk.models.shared.GetSegmentExportJobsResponse getSegmentExportJobsResponse;
    public GetSegmentExportJobsResponse withGetSegmentExportJobsResponse(openapisdk.models.shared.GetSegmentExportJobsResponse getSegmentExportJobsResponse) {
        this.getSegmentExportJobsResponse = getSegmentExportJobsResponse;
        return this;
    }
    public Object internalServerErrorException;
    public GetSegmentExportJobsResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object methodNotAllowedException;
    public GetSegmentExportJobsResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    public Object notFoundException;
    public GetSegmentExportJobsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object payloadTooLargeException;
    public GetSegmentExportJobsResponse withPayloadTooLargeException(Object payloadTooLargeException) {
        this.payloadTooLargeException = payloadTooLargeException;
        return this;
    }
    public Long statusCode;
    public GetSegmentExportJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetSegmentExportJobsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}