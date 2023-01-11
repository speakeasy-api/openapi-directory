package openapisdk.models.operations;



public class ListFindingsReportsResponse {
    public String contentType;
    public ListFindingsReportsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListFindingsReportsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListFindingsReportsResponse listFindingsReportsResponse;
    public ListFindingsReportsResponse withListFindingsReportsResponse(openapisdk.models.shared.ListFindingsReportsResponse listFindingsReportsResponse) {
        this.listFindingsReportsResponse = listFindingsReportsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListFindingsReportsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListFindingsReportsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListFindingsReportsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListFindingsReportsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}