package openapisdk.models.operations;



public class ListSuiteDefinitionsResponse {
    public String contentType;
    public ListSuiteDefinitionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListSuiteDefinitionsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListSuiteDefinitionsResponse listSuiteDefinitionsResponse;
    public ListSuiteDefinitionsResponse withListSuiteDefinitionsResponse(openapisdk.models.shared.ListSuiteDefinitionsResponse listSuiteDefinitionsResponse) {
        this.listSuiteDefinitionsResponse = listSuiteDefinitionsResponse;
        return this;
    }
    public Long statusCode;
    public ListSuiteDefinitionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListSuiteDefinitionsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}