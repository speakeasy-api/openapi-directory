package openapisdk.models.operations;



public class ListMitigationActionsResponse {
    public String contentType;
    public ListMitigationActionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListMitigationActionsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListMitigationActionsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListMitigationActionsResponse listMitigationActionsResponse;
    public ListMitigationActionsResponse withListMitigationActionsResponse(openapisdk.models.shared.ListMitigationActionsResponse listMitigationActionsResponse) {
        this.listMitigationActionsResponse = listMitigationActionsResponse;
        return this;
    }
    public Long statusCode;
    public ListMitigationActionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListMitigationActionsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}