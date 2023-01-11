package openapisdk.models.operations;



public class UntagResourceResponse {
    public Object accessDeniedException;
    public UntagResourceResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object clientLimitExceededException;
    public UntagResourceResponse withClientLimitExceededException(Object clientLimitExceededException) {
        this.clientLimitExceededException = clientLimitExceededException;
        return this;
    }
    public String contentType;
    public UntagResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArgumentException;
    public UntagResourceResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object resourceNotFoundException;
    public UntagResourceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UntagResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> untagResourceOutput;
    public UntagResourceResponse withUntagResourceOutput(java.util.Map<String, Object> untagResourceOutput) {
        this.untagResourceOutput = untagResourceOutput;
        return this;
    }
}