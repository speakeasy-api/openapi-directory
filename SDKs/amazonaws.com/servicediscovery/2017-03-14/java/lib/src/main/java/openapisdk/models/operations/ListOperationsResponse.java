package openapisdk.models.operations;



public class ListOperationsResponse {
    public String contentType;
    public ListOperationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInput;
    public ListOperationsResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public openapisdk.models.shared.ListOperationsResponse listOperationsResponse;
    public ListOperationsResponse withListOperationsResponse(openapisdk.models.shared.ListOperationsResponse listOperationsResponse) {
        this.listOperationsResponse = listOperationsResponse;
        return this;
    }
    public Long statusCode;
    public ListOperationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}