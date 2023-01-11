package openapisdk.models.operations;



public class DescribeSignalingChannelResponse {
    public Object accessDeniedException;
    public DescribeSignalingChannelResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object clientLimitExceededException;
    public DescribeSignalingChannelResponse withClientLimitExceededException(Object clientLimitExceededException) {
        this.clientLimitExceededException = clientLimitExceededException;
        return this;
    }
    public String contentType;
    public DescribeSignalingChannelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeSignalingChannelOutput describeSignalingChannelOutput;
    public DescribeSignalingChannelResponse withDescribeSignalingChannelOutput(openapisdk.models.shared.DescribeSignalingChannelOutput describeSignalingChannelOutput) {
        this.describeSignalingChannelOutput = describeSignalingChannelOutput;
        return this;
    }
    public Object invalidArgumentException;
    public DescribeSignalingChannelResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeSignalingChannelResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeSignalingChannelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}