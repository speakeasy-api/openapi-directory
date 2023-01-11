package openapisdk.models.operations;



public class GetDomainStatisticsReportResponse {
    public Object badRequestException;
    public GetDomainStatisticsReportResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetDomainStatisticsReportResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDomainStatisticsReportResponse getDomainStatisticsReportResponse;
    public GetDomainStatisticsReportResponse withGetDomainStatisticsReportResponse(openapisdk.models.shared.GetDomainStatisticsReportResponse getDomainStatisticsReportResponse) {
        this.getDomainStatisticsReportResponse = getDomainStatisticsReportResponse;
        return this;
    }
    public Object notFoundException;
    public GetDomainStatisticsReportResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetDomainStatisticsReportResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetDomainStatisticsReportResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}