package openapisdk.models.operations;



public class TagResourceResponse {
    public String contentType;
    public TagResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public TagResourceResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object malformedArnException;
    public TagResourceResponse withMalformedArnException(Object malformedArnException) {
        this.malformedArnException = malformedArnException;
        return this;
    }
    public Object resourceArnNotFoundException;
    public TagResourceResponse withResourceArnNotFoundException(Object resourceArnNotFoundException) {
        this.resourceArnNotFoundException = resourceArnNotFoundException;
        return this;
    }
    public Object serverInternalException;
    public TagResourceResponse withServerInternalException(Object serverInternalException) {
        this.serverInternalException = serverInternalException;
        return this;
    }
    public Object serviceUnavailableException;
    public TagResourceResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public TagResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tagLimitExceededException;
    public TagResourceResponse withTagLimitExceededException(Object tagLimitExceededException) {
        this.tagLimitExceededException = tagLimitExceededException;
        return this;
    }
    public Object tagPolicyViolationException;
    public TagResourceResponse withTagPolicyViolationException(Object tagPolicyViolationException) {
        this.tagPolicyViolationException = tagPolicyViolationException;
        return this;
    }
    public java.util.Map<String, Object> tagResourceResponse;
    public TagResourceResponse withTagResourceResponse(java.util.Map<String, Object> tagResourceResponse) {
        this.tagResourceResponse = tagResourceResponse;
        return this;
    }
    public Object unknownResourceException;
    public TagResourceResponse withUnknownResourceException(Object unknownResourceException) {
        this.unknownResourceException = unknownResourceException;
        return this;
    }
}