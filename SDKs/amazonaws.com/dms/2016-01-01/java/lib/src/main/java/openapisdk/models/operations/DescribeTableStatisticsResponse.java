package openapisdk.models.operations;



public class DescribeTableStatisticsResponse {
    public String contentType;
    public DescribeTableStatisticsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeTableStatisticsResponse describeTableStatisticsResponse;
    public DescribeTableStatisticsResponse withDescribeTableStatisticsResponse(openapisdk.models.shared.DescribeTableStatisticsResponse describeTableStatisticsResponse) {
        this.describeTableStatisticsResponse = describeTableStatisticsResponse;
        return this;
    }
    public Object invalidResourceStateFault;
    public DescribeTableStatisticsResponse withInvalidResourceStateFault(Object invalidResourceStateFault) {
        this.invalidResourceStateFault = invalidResourceStateFault;
        return this;
    }
    public Object resourceNotFoundFault;
    public DescribeTableStatisticsResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public Long statusCode;
    public DescribeTableStatisticsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}