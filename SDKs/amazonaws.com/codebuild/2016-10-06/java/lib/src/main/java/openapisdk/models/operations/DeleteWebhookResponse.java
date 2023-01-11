package openapisdk.models.operations;



public class DeleteWebhookResponse {
    public String contentType;
    public DeleteWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteWebhookOutput;
    public DeleteWebhookResponse withDeleteWebhookOutput(java.util.Map<String, Object> deleteWebhookOutput) {
        this.deleteWebhookOutput = deleteWebhookOutput;
        return this;
    }
    public Object invalidInputException;
    public DeleteWebhookResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object oAuthProviderException;
    public DeleteWebhookResponse withOAuthProviderException(Object oAuthProviderException) {
        this.oAuthProviderException = oAuthProviderException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteWebhookResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}