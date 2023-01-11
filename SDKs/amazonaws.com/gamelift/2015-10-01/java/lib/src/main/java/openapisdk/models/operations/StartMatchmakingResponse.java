package openapisdk.models.operations;



public class StartMatchmakingResponse {
    public String contentType;
    public StartMatchmakingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public StartMatchmakingResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public StartMatchmakingResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public StartMatchmakingResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public openapisdk.models.shared.StartMatchmakingOutput startMatchmakingOutput;
    public StartMatchmakingResponse withStartMatchmakingOutput(openapisdk.models.shared.StartMatchmakingOutput startMatchmakingOutput) {
        this.startMatchmakingOutput = startMatchmakingOutput;
        return this;
    }
    public Long statusCode;
    public StartMatchmakingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedRegionException;
    public StartMatchmakingResponse withUnsupportedRegionException(Object unsupportedRegionException) {
        this.unsupportedRegionException = unsupportedRegionException;
        return this;
    }
}