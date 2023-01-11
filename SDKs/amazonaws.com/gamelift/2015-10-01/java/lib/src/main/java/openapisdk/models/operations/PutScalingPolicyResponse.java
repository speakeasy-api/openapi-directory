package openapisdk.models.operations;



public class PutScalingPolicyResponse {
    public String contentType;
    public PutScalingPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public PutScalingPolicyResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public PutScalingPolicyResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public PutScalingPolicyResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public openapisdk.models.shared.PutScalingPolicyOutput putScalingPolicyOutput;
    public PutScalingPolicyResponse withPutScalingPolicyOutput(openapisdk.models.shared.PutScalingPolicyOutput putScalingPolicyOutput) {
        this.putScalingPolicyOutput = putScalingPolicyOutput;
        return this;
    }
    public Long statusCode;
    public PutScalingPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public PutScalingPolicyResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}