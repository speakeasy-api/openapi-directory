package openapisdk.models.operations;



public class PutMetricPolicyResponse {
    public Object containerInUseException;
    public PutMetricPolicyResponse withContainerInUseException(Object containerInUseException) {
        this.containerInUseException = containerInUseException;
        return this;
    }
    public Object containerNotFoundException;
    public PutMetricPolicyResponse withContainerNotFoundException(Object containerNotFoundException) {
        this.containerNotFoundException = containerNotFoundException;
        return this;
    }
    public String contentType;
    public PutMetricPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerError;
    public PutMetricPolicyResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public java.util.Map<String, Object> putMetricPolicyOutput;
    public PutMetricPolicyResponse withPutMetricPolicyOutput(java.util.Map<String, Object> putMetricPolicyOutput) {
        this.putMetricPolicyOutput = putMetricPolicyOutput;
        return this;
    }
    public Long statusCode;
    public PutMetricPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}