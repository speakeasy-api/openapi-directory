package openapisdk.models.operations;



public class GetSegmentImportJobsResponse {
    public Object badRequestException;
    public GetSegmentImportJobsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetSegmentImportJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public GetSegmentImportJobsResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public openapisdk.models.shared.GetSegmentImportJobsResponse getSegmentImportJobsResponse;
    public GetSegmentImportJobsResponse withGetSegmentImportJobsResponse(openapisdk.models.shared.GetSegmentImportJobsResponse getSegmentImportJobsResponse) {
        this.getSegmentImportJobsResponse = getSegmentImportJobsResponse;
        return this;
    }
    public Object internalServerErrorException;
    public GetSegmentImportJobsResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object methodNotAllowedException;
    public GetSegmentImportJobsResponse withMethodNotAllowedException(Object methodNotAllowedException) {
        this.methodNotAllowedException = methodNotAllowedException;
        return this;
    }
    public Object notFoundException;
    public GetSegmentImportJobsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object payloadTooLargeException;
    public GetSegmentImportJobsResponse withPayloadTooLargeException(Object payloadTooLargeException) {
        this.payloadTooLargeException = payloadTooLargeException;
        return this;
    }
    public Long statusCode;
    public GetSegmentImportJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetSegmentImportJobsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}