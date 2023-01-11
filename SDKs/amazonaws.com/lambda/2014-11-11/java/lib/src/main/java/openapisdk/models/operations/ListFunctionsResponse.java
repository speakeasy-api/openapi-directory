package openapisdk.models.operations;



public class ListFunctionsResponse {
    public String contentType;
    public ListFunctionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListFunctionsResponse listFunctionsResponse;
    public ListFunctionsResponse withListFunctionsResponse(openapisdk.models.shared.ListFunctionsResponse listFunctionsResponse) {
        this.listFunctionsResponse = listFunctionsResponse;
        return this;
    }
    public openapisdk.models.shared.ServiceException serviceException;
    public ListFunctionsResponse withServiceException(openapisdk.models.shared.ServiceException serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public ListFunctionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}