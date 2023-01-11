package openapisdk.models.operations;



public class CreateWebhookResponse {
    public String contentType;
    public CreateWebhookResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateWebhookOutput createWebhookOutput;
    public CreateWebhookResponse withCreateWebhookOutput(openapisdk.models.shared.CreateWebhookOutput createWebhookOutput) {
        this.createWebhookOutput = createWebhookOutput;
        return this;
    }
    public Object invalidInputException;
    public CreateWebhookResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object oAuthProviderException;
    public CreateWebhookResponse withOAuthProviderException(Object oAuthProviderException) {
        this.oAuthProviderException = oAuthProviderException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateWebhookResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateWebhookResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateWebhookResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}