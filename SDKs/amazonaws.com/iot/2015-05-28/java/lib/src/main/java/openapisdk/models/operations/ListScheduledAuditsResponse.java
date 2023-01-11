package openapisdk.models.operations;



public class ListScheduledAuditsResponse {
    public String contentType;
    public ListScheduledAuditsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListScheduledAuditsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListScheduledAuditsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListScheduledAuditsResponse listScheduledAuditsResponse;
    public ListScheduledAuditsResponse withListScheduledAuditsResponse(openapisdk.models.shared.ListScheduledAuditsResponse listScheduledAuditsResponse) {
        this.listScheduledAuditsResponse = listScheduledAuditsResponse;
        return this;
    }
    public Long statusCode;
    public ListScheduledAuditsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListScheduledAuditsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}