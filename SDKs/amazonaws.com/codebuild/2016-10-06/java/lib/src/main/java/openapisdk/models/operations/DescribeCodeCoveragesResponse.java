package openapisdk.models.operations;



public class DescribeCodeCoveragesResponse {
    public String contentType;
    public DescribeCodeCoveragesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeCodeCoveragesOutput describeCodeCoveragesOutput;
    public DescribeCodeCoveragesResponse withDescribeCodeCoveragesOutput(openapisdk.models.shared.DescribeCodeCoveragesOutput describeCodeCoveragesOutput) {
        this.describeCodeCoveragesOutput = describeCodeCoveragesOutput;
        return this;
    }
    public Object invalidInputException;
    public DescribeCodeCoveragesResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Long statusCode;
    public DescribeCodeCoveragesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}