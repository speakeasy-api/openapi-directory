package openapisdk.models.operations;



public class DeleteMetricPolicyResponse {
    public Object containerInUseException;
    public DeleteMetricPolicyResponse withContainerInUseException(Object containerInUseException) {
        this.containerInUseException = containerInUseException;
        return this;
    }
    public Object containerNotFoundException;
    public DeleteMetricPolicyResponse withContainerNotFoundException(Object containerNotFoundException) {
        this.containerNotFoundException = containerNotFoundException;
        return this;
    }
    public String contentType;
    public DeleteMetricPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteMetricPolicyOutput;
    public DeleteMetricPolicyResponse withDeleteMetricPolicyOutput(java.util.Map<String, Object> deleteMetricPolicyOutput) {
        this.deleteMetricPolicyOutput = deleteMetricPolicyOutput;
        return this;
    }
    public Object internalServerError;
    public DeleteMetricPolicyResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object policyNotFoundException;
    public DeleteMetricPolicyResponse withPolicyNotFoundException(Object policyNotFoundException) {
        this.policyNotFoundException = policyNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteMetricPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}