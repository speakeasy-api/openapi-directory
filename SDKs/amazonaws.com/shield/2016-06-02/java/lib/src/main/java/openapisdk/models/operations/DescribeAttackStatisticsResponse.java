package openapisdk.models.operations;



public class DescribeAttackStatisticsResponse {
    public String contentType;
    public DescribeAttackStatisticsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAttackStatisticsResponse describeAttackStatisticsResponse;
    public DescribeAttackStatisticsResponse withDescribeAttackStatisticsResponse(openapisdk.models.shared.DescribeAttackStatisticsResponse describeAttackStatisticsResponse) {
        this.describeAttackStatisticsResponse = describeAttackStatisticsResponse;
        return this;
    }
    public Object internalErrorException;
    public DescribeAttackStatisticsResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Long statusCode;
    public DescribeAttackStatisticsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}