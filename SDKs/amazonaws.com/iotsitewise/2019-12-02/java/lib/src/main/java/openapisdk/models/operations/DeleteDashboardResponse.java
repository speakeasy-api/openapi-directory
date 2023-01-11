package openapisdk.models.operations;



public class DeleteDashboardResponse {
    public String contentType;
    public DeleteDashboardResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteDashboardResponse;
    public DeleteDashboardResponse withDeleteDashboardResponse(java.util.Map<String, Object> deleteDashboardResponse) {
        this.deleteDashboardResponse = deleteDashboardResponse;
        return this;
    }
    public Object internalFailureException;
    public DeleteDashboardResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteDashboardResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteDashboardResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteDashboardResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteDashboardResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}