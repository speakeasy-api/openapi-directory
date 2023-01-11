package openapisdk.models.operations;



public class DescribeEvaluationsResponse {
    public String contentType;
    public DescribeEvaluationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeEvaluationsOutput describeEvaluationsOutput;
    public DescribeEvaluationsResponse withDescribeEvaluationsOutput(openapisdk.models.shared.DescribeEvaluationsOutput describeEvaluationsOutput) {
        this.describeEvaluationsOutput = describeEvaluationsOutput;
        return this;
    }
    public Object internalServerException;
    public DescribeEvaluationsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidInputException;
    public DescribeEvaluationsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Long statusCode;
    public DescribeEvaluationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}