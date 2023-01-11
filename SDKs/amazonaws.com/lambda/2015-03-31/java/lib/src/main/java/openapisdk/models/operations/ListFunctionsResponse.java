package openapisdk.models.operations;



public class ListFunctionsResponse {
    public String contentType;
    public ListFunctionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public ListFunctionsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public openapisdk.models.shared.ListFunctionsResponse listFunctionsResponse;
    public ListFunctionsResponse withListFunctionsResponse(openapisdk.models.shared.ListFunctionsResponse listFunctionsResponse) {
        this.listFunctionsResponse = listFunctionsResponse;
        return this;
    }
    public Object serviceException;
    public ListFunctionsResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public ListFunctionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListFunctionsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}