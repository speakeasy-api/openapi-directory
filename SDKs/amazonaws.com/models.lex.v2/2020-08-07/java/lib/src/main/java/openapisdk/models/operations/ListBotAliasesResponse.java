package openapisdk.models.operations;



public class ListBotAliasesResponse {
    public String contentType;
    public ListBotAliasesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListBotAliasesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListBotAliasesResponse listBotAliasesResponse;
    public ListBotAliasesResponse withListBotAliasesResponse(openapisdk.models.shared.ListBotAliasesResponse listBotAliasesResponse) {
        this.listBotAliasesResponse = listBotAliasesResponse;
        return this;
    }
    public Object serviceQuotaExceededException;
    public ListBotAliasesResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public ListBotAliasesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListBotAliasesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListBotAliasesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}