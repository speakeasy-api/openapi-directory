package openapisdk.models.operations;



public class GetAccountConfigurationResponse {
    public Object accessDeniedException;
    public GetAccountConfigurationResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetAccountConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAccountConfigurationResponse getAccountConfigurationResponse;
    public GetAccountConfigurationResponse withGetAccountConfigurationResponse(openapisdk.models.shared.GetAccountConfigurationResponse getAccountConfigurationResponse) {
        this.getAccountConfigurationResponse = getAccountConfigurationResponse;
        return this;
    }
    public Long statusCode;
    public GetAccountConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetAccountConfigurationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}