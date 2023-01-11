package openapisdk.models.operations;



public class DescribeActivityResponse {
    public Object activityDoesNotExist;
    public DescribeActivityResponse withActivityDoesNotExist(Object activityDoesNotExist) {
        this.activityDoesNotExist = activityDoesNotExist;
        return this;
    }
    public String contentType;
    public DescribeActivityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeActivityOutput describeActivityOutput;
    public DescribeActivityResponse withDescribeActivityOutput(openapisdk.models.shared.DescribeActivityOutput describeActivityOutput) {
        this.describeActivityOutput = describeActivityOutput;
        return this;
    }
    public Object invalidArn;
    public DescribeActivityResponse withInvalidArn(Object invalidArn) {
        this.invalidArn = invalidArn;
        return this;
    }
    public Long statusCode;
    public DescribeActivityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}