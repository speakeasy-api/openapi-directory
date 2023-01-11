package openapisdk.models.operations;



public class PostAgentProfileResponse {
    public String contentType;
    public PostAgentProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public PostAgentProfileResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public java.util.Map<String, Object> postAgentProfileResponse;
    public PostAgentProfileResponse withPostAgentProfileResponse(java.util.Map<String, Object> postAgentProfileResponse) {
        this.postAgentProfileResponse = postAgentProfileResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public PostAgentProfileResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public PostAgentProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public PostAgentProfileResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public PostAgentProfileResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}