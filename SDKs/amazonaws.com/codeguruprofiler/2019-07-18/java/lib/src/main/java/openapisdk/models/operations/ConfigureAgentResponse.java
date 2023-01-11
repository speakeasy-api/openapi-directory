package openapisdk.models.operations;



public class ConfigureAgentResponse {
    public openapisdk.models.shared.ConfigureAgentResponse configureAgentResponse;
    public ConfigureAgentResponse withConfigureAgentResponse(openapisdk.models.shared.ConfigureAgentResponse configureAgentResponse) {
        this.configureAgentResponse = configureAgentResponse;
        return this;
    }
    public String contentType;
    public ConfigureAgentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ConfigureAgentResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public ConfigureAgentResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ConfigureAgentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ConfigureAgentResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ConfigureAgentResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}