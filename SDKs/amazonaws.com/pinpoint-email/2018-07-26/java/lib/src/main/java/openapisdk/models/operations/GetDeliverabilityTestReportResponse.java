package openapisdk.models.operations;



public class GetDeliverabilityTestReportResponse {
    public Object badRequestException;
    public GetDeliverabilityTestReportResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetDeliverabilityTestReportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDeliverabilityTestReportResponse getDeliverabilityTestReportResponse;
    public GetDeliverabilityTestReportResponse withGetDeliverabilityTestReportResponse(openapisdk.models.shared.GetDeliverabilityTestReportResponse getDeliverabilityTestReportResponse) {
        this.getDeliverabilityTestReportResponse = getDeliverabilityTestReportResponse;
        return this;
    }
    public Object notFoundException;
    public GetDeliverabilityTestReportResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetDeliverabilityTestReportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetDeliverabilityTestReportResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}