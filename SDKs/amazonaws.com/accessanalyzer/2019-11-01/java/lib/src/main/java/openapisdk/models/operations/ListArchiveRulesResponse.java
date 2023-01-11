package openapisdk.models.operations;



public class ListArchiveRulesResponse {
    public Object accessDeniedException;
    public ListArchiveRulesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListArchiveRulesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListArchiveRulesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListArchiveRulesResponse listArchiveRulesResponse;
    public ListArchiveRulesResponse withListArchiveRulesResponse(openapisdk.models.shared.ListArchiveRulesResponse listArchiveRulesResponse) {
        this.listArchiveRulesResponse = listArchiveRulesResponse;
        return this;
    }
    public Long statusCode;
    public ListArchiveRulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListArchiveRulesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListArchiveRulesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}