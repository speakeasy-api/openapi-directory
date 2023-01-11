package openapisdk.models.operations;



public class UpdateMitigationActionResponse {
    public String contentType;
    public UpdateMitigationActionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public UpdateMitigationActionResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateMitigationActionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateMitigationActionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateMitigationActionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateMitigationActionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateMitigationActionResponse updateMitigationActionResponse;
    public UpdateMitigationActionResponse withUpdateMitigationActionResponse(openapisdk.models.shared.UpdateMitigationActionResponse updateMitigationActionResponse) {
        this.updateMitigationActionResponse = updateMitigationActionResponse;
        return this;
    }
}