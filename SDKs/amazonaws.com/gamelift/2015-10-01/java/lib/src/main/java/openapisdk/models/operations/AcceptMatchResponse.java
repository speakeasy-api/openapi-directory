package openapisdk.models.operations;



public class AcceptMatchResponse {
    public java.util.Map<String, Object> acceptMatchOutput;
    public AcceptMatchResponse withAcceptMatchOutput(java.util.Map<String, Object> acceptMatchOutput) {
        this.acceptMatchOutput = acceptMatchOutput;
        return this;
    }
    public String contentType;
    public AcceptMatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public AcceptMatchResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public AcceptMatchResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public AcceptMatchResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public AcceptMatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedRegionException;
    public AcceptMatchResponse withUnsupportedRegionException(Object unsupportedRegionException) {
        this.unsupportedRegionException = unsupportedRegionException;
        return this;
    }
}