package openapisdk.models.operations;



public class ListDashboardsResponse {
    public String contentType;
    public ListDashboardsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListDashboardsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListDashboardsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListDashboardsResponse listDashboardsResponse;
    public ListDashboardsResponse withListDashboardsResponse(openapisdk.models.shared.ListDashboardsResponse listDashboardsResponse) {
        this.listDashboardsResponse = listDashboardsResponse;
        return this;
    }
    public Long statusCode;
    public ListDashboardsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListDashboardsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}