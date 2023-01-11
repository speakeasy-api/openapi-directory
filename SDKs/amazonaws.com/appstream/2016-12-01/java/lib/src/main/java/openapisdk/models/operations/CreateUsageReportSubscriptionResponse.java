package openapisdk.models.operations;



public class CreateUsageReportSubscriptionResponse {
    public String contentType;
    public CreateUsageReportSubscriptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateUsageReportSubscriptionResult createUsageReportSubscriptionResult;
    public CreateUsageReportSubscriptionResponse withCreateUsageReportSubscriptionResult(openapisdk.models.shared.CreateUsageReportSubscriptionResult createUsageReportSubscriptionResult) {
        this.createUsageReportSubscriptionResult = createUsageReportSubscriptionResult;
        return this;
    }
    public Object invalidAccountStatusException;
    public CreateUsageReportSubscriptionResponse withInvalidAccountStatusException(Object invalidAccountStatusException) {
        this.invalidAccountStatusException = invalidAccountStatusException;
        return this;
    }
    public Object invalidRoleException;
    public CreateUsageReportSubscriptionResponse withInvalidRoleException(Object invalidRoleException) {
        this.invalidRoleException = invalidRoleException;
        return this;
    }
    public Object limitExceededException;
    public CreateUsageReportSubscriptionResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateUsageReportSubscriptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}