package openapisdk.models.operations;



public class ListExperimentsResponse {
    public String contentType;
    public ListExperimentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListExperimentsResponse listExperimentsResponse;
    public ListExperimentsResponse withListExperimentsResponse(openapisdk.models.shared.ListExperimentsResponse listExperimentsResponse) {
        this.listExperimentsResponse = listExperimentsResponse;
        return this;
    }
    public Long statusCode;
    public ListExperimentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListExperimentsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}