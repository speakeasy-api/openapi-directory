package openapisdk.models.operations;



public class DescribeConfigurationRecorderStatusResponse {
    public String contentType;
    public DescribeConfigurationRecorderStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeConfigurationRecorderStatusResponse describeConfigurationRecorderStatusResponse;
    public DescribeConfigurationRecorderStatusResponse withDescribeConfigurationRecorderStatusResponse(openapisdk.models.shared.DescribeConfigurationRecorderStatusResponse describeConfigurationRecorderStatusResponse) {
        this.describeConfigurationRecorderStatusResponse = describeConfigurationRecorderStatusResponse;
        return this;
    }
    public Object noSuchConfigurationRecorderException;
    public DescribeConfigurationRecorderStatusResponse withNoSuchConfigurationRecorderException(Object noSuchConfigurationRecorderException) {
        this.noSuchConfigurationRecorderException = noSuchConfigurationRecorderException;
        return this;
    }
    public Long statusCode;
    public DescribeConfigurationRecorderStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}