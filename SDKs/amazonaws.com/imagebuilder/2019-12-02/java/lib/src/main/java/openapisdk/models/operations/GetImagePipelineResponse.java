package openapisdk.models.operations;



public class GetImagePipelineResponse {
    public Object callRateLimitExceededException;
    public GetImagePipelineResponse withCallRateLimitExceededException(Object callRateLimitExceededException) {
        this.callRateLimitExceededException = callRateLimitExceededException;
        return this;
    }
    public Object clientException;
    public GetImagePipelineResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public GetImagePipelineResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public GetImagePipelineResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public openapisdk.models.shared.GetImagePipelineResponse getImagePipelineResponse;
    public GetImagePipelineResponse withGetImagePipelineResponse(openapisdk.models.shared.GetImagePipelineResponse getImagePipelineResponse) {
        this.getImagePipelineResponse = getImagePipelineResponse;
        return this;
    }
    public Object invalidRequestException;
    public GetImagePipelineResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object serviceException;
    public GetImagePipelineResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetImagePipelineResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetImagePipelineResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}