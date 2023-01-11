package openapisdk.models.operations;



public class ListDetectMitigationActionsExecutionsResponse {
    public String contentType;
    public ListDetectMitigationActionsExecutionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListDetectMitigationActionsExecutionsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListDetectMitigationActionsExecutionsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListDetectMitigationActionsExecutionsResponse listDetectMitigationActionsExecutionsResponse;
    public ListDetectMitigationActionsExecutionsResponse withListDetectMitigationActionsExecutionsResponse(openapisdk.models.shared.ListDetectMitigationActionsExecutionsResponse listDetectMitigationActionsExecutionsResponse) {
        this.listDetectMitigationActionsExecutionsResponse = listDetectMitigationActionsExecutionsResponse;
        return this;
    }
    public Long statusCode;
    public ListDetectMitigationActionsExecutionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListDetectMitigationActionsExecutionsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}