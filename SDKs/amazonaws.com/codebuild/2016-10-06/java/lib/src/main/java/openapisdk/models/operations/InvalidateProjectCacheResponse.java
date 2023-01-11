package openapisdk.models.operations;



public class InvalidateProjectCacheResponse {
    public String contentType;
    public InvalidateProjectCacheResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public InvalidateProjectCacheResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public java.util.Map<String, Object> invalidateProjectCacheOutput;
    public InvalidateProjectCacheResponse withInvalidateProjectCacheOutput(java.util.Map<String, Object> invalidateProjectCacheOutput) {
        this.invalidateProjectCacheOutput = invalidateProjectCacheOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public InvalidateProjectCacheResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public InvalidateProjectCacheResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}