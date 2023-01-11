package openapisdk.models.operations;



public class DescribeRxNormInferenceJobResponse {
    public String contentType;
    public DescribeRxNormInferenceJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeRxNormInferenceJobResponse describeRxNormInferenceJobResponse;
    public DescribeRxNormInferenceJobResponse withDescribeRxNormInferenceJobResponse(openapisdk.models.shared.DescribeRxNormInferenceJobResponse describeRxNormInferenceJobResponse) {
        this.describeRxNormInferenceJobResponse = describeRxNormInferenceJobResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeRxNormInferenceJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeRxNormInferenceJobResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeRxNormInferenceJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeRxNormInferenceJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DescribeRxNormInferenceJobResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}