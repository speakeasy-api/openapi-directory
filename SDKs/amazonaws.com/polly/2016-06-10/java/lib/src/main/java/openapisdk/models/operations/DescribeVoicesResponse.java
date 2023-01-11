package openapisdk.models.operations;



public class DescribeVoicesResponse {
    public String contentType;
    public DescribeVoicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeVoicesOutput describeVoicesOutput;
    public DescribeVoicesResponse withDescribeVoicesOutput(openapisdk.models.shared.DescribeVoicesOutput describeVoicesOutput) {
        this.describeVoicesOutput = describeVoicesOutput;
        return this;
    }
    public Object invalidNextTokenException;
    public DescribeVoicesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object serviceFailureException;
    public DescribeVoicesResponse withServiceFailureException(Object serviceFailureException) {
        this.serviceFailureException = serviceFailureException;
        return this;
    }
    public Long statusCode;
    public DescribeVoicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}