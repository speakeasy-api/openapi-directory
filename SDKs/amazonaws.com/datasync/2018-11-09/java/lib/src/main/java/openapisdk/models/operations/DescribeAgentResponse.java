package openapisdk.models.operations;



public class DescribeAgentResponse {
    public String contentType;
    public DescribeAgentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAgentResponse describeAgentResponse;
    public DescribeAgentResponse withDescribeAgentResponse(openapisdk.models.shared.DescribeAgentResponse describeAgentResponse) {
        this.describeAgentResponse = describeAgentResponse;
        return this;
    }
    public Object internalException;
    public DescribeAgentResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeAgentResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public DescribeAgentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}