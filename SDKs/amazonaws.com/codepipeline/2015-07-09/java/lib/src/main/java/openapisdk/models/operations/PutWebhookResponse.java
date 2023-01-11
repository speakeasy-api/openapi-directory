package openapisdk.models.operations;



public class PutWebhookResponse {
    public Object concurrentModificationException;
    public PutWebhookResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public PutWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidTagsException;
    public PutWebhookResponse withInvalidTagsException(Object invalidTagsException) {
        this.invalidTagsException = invalidTagsException;
        return this;
    }
    public Object invalidWebhookAuthenticationParametersException;
    public PutWebhookResponse withInvalidWebhookAuthenticationParametersException(Object invalidWebhookAuthenticationParametersException) {
        this.invalidWebhookAuthenticationParametersException = invalidWebhookAuthenticationParametersException;
        return this;
    }
    public Object invalidWebhookFilterPatternException;
    public PutWebhookResponse withInvalidWebhookFilterPatternException(Object invalidWebhookFilterPatternException) {
        this.invalidWebhookFilterPatternException = invalidWebhookFilterPatternException;
        return this;
    }
    public Object limitExceededException;
    public PutWebhookResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object pipelineNotFoundException;
    public PutWebhookResponse withPipelineNotFoundException(Object pipelineNotFoundException) {
        this.pipelineNotFoundException = pipelineNotFoundException;
        return this;
    }
    public openapisdk.models.shared.PutWebhookOutput putWebhookOutput;
    public PutWebhookResponse withPutWebhookOutput(openapisdk.models.shared.PutWebhookOutput putWebhookOutput) {
        this.putWebhookOutput = putWebhookOutput;
        return this;
    }
    public Long statusCode;
    public PutWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyTagsException;
    public PutWebhookResponse withTooManyTagsException(Object tooManyTagsException) {
        this.tooManyTagsException = tooManyTagsException;
        return this;
    }
    public Object validationException;
    public PutWebhookResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}