package openapisdk.models.operations;



public class CancelWorldExportJobResponse {
    public java.util.Map<String, Object> cancelWorldExportJobResponse;
    public CancelWorldExportJobResponse withCancelWorldExportJobResponse(java.util.Map<String, Object> cancelWorldExportJobResponse) {
        this.cancelWorldExportJobResponse = cancelWorldExportJobResponse;
        return this;
    }
    public String contentType;
    public CancelWorldExportJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public CancelWorldExportJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public CancelWorldExportJobResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public CancelWorldExportJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CancelWorldExportJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CancelWorldExportJobResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}