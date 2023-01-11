package openapisdk.models.operations;



public class StopMatchmakingResponse {
    public String contentType;
    public StopMatchmakingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public StopMatchmakingResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public StopMatchmakingResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public StopMatchmakingResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public StopMatchmakingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> stopMatchmakingOutput;
    public StopMatchmakingResponse withStopMatchmakingOutput(java.util.Map<String, Object> stopMatchmakingOutput) {
        this.stopMatchmakingOutput = stopMatchmakingOutput;
        return this;
    }
    public Object unsupportedRegionException;
    public StopMatchmakingResponse withUnsupportedRegionException(Object unsupportedRegionException) {
        this.unsupportedRegionException = unsupportedRegionException;
        return this;
    }
}