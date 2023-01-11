package openapisdk.models.operations;



public class ListDetectMitigationActionsTasksResponse {
    public String contentType;
    public ListDetectMitigationActionsTasksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListDetectMitigationActionsTasksResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListDetectMitigationActionsTasksResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListDetectMitigationActionsTasksResponse listDetectMitigationActionsTasksResponse;
    public ListDetectMitigationActionsTasksResponse withListDetectMitigationActionsTasksResponse(openapisdk.models.shared.ListDetectMitigationActionsTasksResponse listDetectMitigationActionsTasksResponse) {
        this.listDetectMitigationActionsTasksResponse = listDetectMitigationActionsTasksResponse;
        return this;
    }
    public Long statusCode;
    public ListDetectMitigationActionsTasksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListDetectMitigationActionsTasksResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}