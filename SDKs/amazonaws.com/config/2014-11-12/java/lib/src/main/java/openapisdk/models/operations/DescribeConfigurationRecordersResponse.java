package openapisdk.models.operations;



public class DescribeConfigurationRecordersResponse {
    public String contentType;
    public DescribeConfigurationRecordersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeConfigurationRecordersResponse describeConfigurationRecordersResponse;
    public DescribeConfigurationRecordersResponse withDescribeConfigurationRecordersResponse(openapisdk.models.shared.DescribeConfigurationRecordersResponse describeConfigurationRecordersResponse) {
        this.describeConfigurationRecordersResponse = describeConfigurationRecordersResponse;
        return this;
    }
    public Object noSuchConfigurationRecorderException;
    public DescribeConfigurationRecordersResponse withNoSuchConfigurationRecorderException(Object noSuchConfigurationRecorderException) {
        this.noSuchConfigurationRecorderException = noSuchConfigurationRecorderException;
        return this;
    }
    public Long statusCode;
    public DescribeConfigurationRecordersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}