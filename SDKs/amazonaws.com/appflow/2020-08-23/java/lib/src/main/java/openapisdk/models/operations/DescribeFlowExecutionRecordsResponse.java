package openapisdk.models.operations;



public class DescribeFlowExecutionRecordsResponse {
    public String contentType;
    public DescribeFlowExecutionRecordsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeFlowExecutionRecordsResponse describeFlowExecutionRecordsResponse;
    public DescribeFlowExecutionRecordsResponse withDescribeFlowExecutionRecordsResponse(openapisdk.models.shared.DescribeFlowExecutionRecordsResponse describeFlowExecutionRecordsResponse) {
        this.describeFlowExecutionRecordsResponse = describeFlowExecutionRecordsResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeFlowExecutionRecordsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeFlowExecutionRecordsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeFlowExecutionRecordsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeFlowExecutionRecordsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}