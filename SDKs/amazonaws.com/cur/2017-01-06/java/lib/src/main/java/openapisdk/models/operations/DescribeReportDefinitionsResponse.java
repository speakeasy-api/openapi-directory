package openapisdk.models.operations;



public class DescribeReportDefinitionsResponse {
    public String contentType;
    public DescribeReportDefinitionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeReportDefinitionsResponse describeReportDefinitionsResponse;
    public DescribeReportDefinitionsResponse withDescribeReportDefinitionsResponse(openapisdk.models.shared.DescribeReportDefinitionsResponse describeReportDefinitionsResponse) {
        this.describeReportDefinitionsResponse = describeReportDefinitionsResponse;
        return this;
    }
    public Object internalErrorException;
    public DescribeReportDefinitionsResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Long statusCode;
    public DescribeReportDefinitionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}