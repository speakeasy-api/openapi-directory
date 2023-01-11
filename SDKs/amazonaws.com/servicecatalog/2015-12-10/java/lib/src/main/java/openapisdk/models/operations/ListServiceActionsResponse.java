package openapisdk.models.operations;



public class ListServiceActionsResponse {
    public String contentType;
    public ListServiceActionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParametersException;
    public ListServiceActionsResponse withInvalidParametersException(Object invalidParametersException) {
        this.invalidParametersException = invalidParametersException;
        return this;
    }
    public openapisdk.models.shared.ListServiceActionsOutput listServiceActionsOutput;
    public ListServiceActionsResponse withListServiceActionsOutput(openapisdk.models.shared.ListServiceActionsOutput listServiceActionsOutput) {
        this.listServiceActionsOutput = listServiceActionsOutput;
        return this;
    }
    public Long statusCode;
    public ListServiceActionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}