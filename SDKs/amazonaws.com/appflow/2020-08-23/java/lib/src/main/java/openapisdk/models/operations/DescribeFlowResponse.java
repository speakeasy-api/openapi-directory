package openapisdk.models.operations;



public class DescribeFlowResponse {
    public String contentType;
    public DescribeFlowResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeFlowResponse describeFlowResponse;
    public DescribeFlowResponse withDescribeFlowResponse(openapisdk.models.shared.DescribeFlowResponse describeFlowResponse) {
        this.describeFlowResponse = describeFlowResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeFlowResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeFlowResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeFlowResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}