package openapisdk.models.operations;



public class CreateSignalingChannelResponse {
    public Object accessDeniedException;
    public CreateSignalingChannelResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountChannelLimitExceededException;
    public CreateSignalingChannelResponse withAccountChannelLimitExceededException(Object accountChannelLimitExceededException) {
        this.accountChannelLimitExceededException = accountChannelLimitExceededException;
        return this;
    }
    public Object clientLimitExceededException;
    public CreateSignalingChannelResponse withClientLimitExceededException(Object clientLimitExceededException) {
        this.clientLimitExceededException = clientLimitExceededException;
        return this;
    }
    public String contentType;
    public CreateSignalingChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateSignalingChannelOutput createSignalingChannelOutput;
    public CreateSignalingChannelResponse withCreateSignalingChannelOutput(openapisdk.models.shared.CreateSignalingChannelOutput createSignalingChannelOutput) {
        this.createSignalingChannelOutput = createSignalingChannelOutput;
        return this;
    }
    public Object invalidArgumentException;
    public CreateSignalingChannelResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object resourceInUseException;
    public CreateSignalingChannelResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Long statusCode;
    public CreateSignalingChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tagsPerResourceExceededLimitException;
    public CreateSignalingChannelResponse withTagsPerResourceExceededLimitException(Object tagsPerResourceExceededLimitException) {
        this.tagsPerResourceExceededLimitException = tagsPerResourceExceededLimitException;
        return this;
    }
}