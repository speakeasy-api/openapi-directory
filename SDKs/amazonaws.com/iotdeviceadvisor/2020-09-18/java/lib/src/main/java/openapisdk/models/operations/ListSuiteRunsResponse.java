package openapisdk.models.operations;



public class ListSuiteRunsResponse {
    public String contentType;
    public ListSuiteRunsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListSuiteRunsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListSuiteRunsResponse listSuiteRunsResponse;
    public ListSuiteRunsResponse withListSuiteRunsResponse(openapisdk.models.shared.ListSuiteRunsResponse listSuiteRunsResponse) {
        this.listSuiteRunsResponse = listSuiteRunsResponse;
        return this;
    }
    public Long statusCode;
    public ListSuiteRunsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListSuiteRunsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}