package openapisdk.models.operations;



public class ListDeliverabilityTestReportsResponse {
    public Object badRequestException;
    public ListDeliverabilityTestReportsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListDeliverabilityTestReportsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListDeliverabilityTestReportsResponse listDeliverabilityTestReportsResponse;
    public ListDeliverabilityTestReportsResponse withListDeliverabilityTestReportsResponse(openapisdk.models.shared.ListDeliverabilityTestReportsResponse listDeliverabilityTestReportsResponse) {
        this.listDeliverabilityTestReportsResponse = listDeliverabilityTestReportsResponse;
        return this;
    }
    public Object notFoundException;
    public ListDeliverabilityTestReportsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public ListDeliverabilityTestReportsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListDeliverabilityTestReportsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}