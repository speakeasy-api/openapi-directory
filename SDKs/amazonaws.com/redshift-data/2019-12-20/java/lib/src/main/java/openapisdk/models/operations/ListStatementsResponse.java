package openapisdk.models.operations;



public class ListStatementsResponse {
    public String contentType;
    public ListStatementsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListStatementsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListStatementsResponse listStatementsResponse;
    public ListStatementsResponse withListStatementsResponse(openapisdk.models.shared.ListStatementsResponse listStatementsResponse) {
        this.listStatementsResponse = listStatementsResponse;
        return this;
    }
    public Long statusCode;
    public ListStatementsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListStatementsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}