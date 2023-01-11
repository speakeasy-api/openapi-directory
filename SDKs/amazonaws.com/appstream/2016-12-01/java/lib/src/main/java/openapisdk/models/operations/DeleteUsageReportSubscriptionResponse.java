package openapisdk.models.operations;



public class DeleteUsageReportSubscriptionResponse {
    public String contentType;
    public DeleteUsageReportSubscriptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteUsageReportSubscriptionResult;
    public DeleteUsageReportSubscriptionResponse withDeleteUsageReportSubscriptionResult(java.util.Map<String, Object> deleteUsageReportSubscriptionResult) {
        this.deleteUsageReportSubscriptionResult = deleteUsageReportSubscriptionResult;
        return this;
    }
    public Object invalidAccountStatusException;
    public DeleteUsageReportSubscriptionResponse withInvalidAccountStatusException(Object invalidAccountStatusException) {
        this.invalidAccountStatusException = invalidAccountStatusException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteUsageReportSubscriptionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteUsageReportSubscriptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}