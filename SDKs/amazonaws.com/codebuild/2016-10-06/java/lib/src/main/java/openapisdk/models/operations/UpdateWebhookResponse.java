package openapisdk.models.operations;



public class UpdateWebhookResponse {
    public String contentType;
    public UpdateWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public UpdateWebhookResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object oAuthProviderException;
    public UpdateWebhookResponse withOAuthProviderException(Object oAuthProviderException) {
        this.oAuthProviderException = oAuthProviderException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateWebhookResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateWebhookOutput updateWebhookOutput;
    public UpdateWebhookResponse withUpdateWebhookOutput(openapisdk.models.shared.UpdateWebhookOutput updateWebhookOutput) {
        this.updateWebhookOutput = updateWebhookOutput;
        return this;
    }
}