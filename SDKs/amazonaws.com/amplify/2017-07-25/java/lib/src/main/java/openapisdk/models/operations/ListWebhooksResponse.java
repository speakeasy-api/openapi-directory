package openapisdk.models.operations;



public class ListWebhooksResponse {
    public Object badRequestException;
    public ListWebhooksResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListWebhooksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListWebhooksResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public ListWebhooksResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListWebhooksResult listWebhooksResult;
    public ListWebhooksResponse withListWebhooksResult(openapisdk.models.shared.ListWebhooksResult listWebhooksResult) {
        this.listWebhooksResult = listWebhooksResult;
        return this;
    }
    public Long statusCode;
    public ListWebhooksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public ListWebhooksResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}