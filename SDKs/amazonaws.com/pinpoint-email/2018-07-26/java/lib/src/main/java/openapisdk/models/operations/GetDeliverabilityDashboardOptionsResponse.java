package openapisdk.models.operations;



public class GetDeliverabilityDashboardOptionsResponse {
    public Object badRequestException;
    public GetDeliverabilityDashboardOptionsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetDeliverabilityDashboardOptionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDeliverabilityDashboardOptionsResponse getDeliverabilityDashboardOptionsResponse;
    public GetDeliverabilityDashboardOptionsResponse withGetDeliverabilityDashboardOptionsResponse(openapisdk.models.shared.GetDeliverabilityDashboardOptionsResponse getDeliverabilityDashboardOptionsResponse) {
        this.getDeliverabilityDashboardOptionsResponse = getDeliverabilityDashboardOptionsResponse;
        return this;
    }
    public Object limitExceededException;
    public GetDeliverabilityDashboardOptionsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public GetDeliverabilityDashboardOptionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetDeliverabilityDashboardOptionsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}