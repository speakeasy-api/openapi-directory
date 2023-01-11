package openapisdk.models.operations;



public class CreateHomeRegionControlResponse {
    public Object accessDeniedException;
    public CreateHomeRegionControlResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateHomeRegionControlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateHomeRegionControlResult createHomeRegionControlResult;
    public CreateHomeRegionControlResponse withCreateHomeRegionControlResult(openapisdk.models.shared.CreateHomeRegionControlResult createHomeRegionControlResult) {
        this.createHomeRegionControlResult = createHomeRegionControlResult;
        return this;
    }
    public Object dryRunOperation;
    public CreateHomeRegionControlResponse withDryRunOperation(Object dryRunOperation) {
        this.dryRunOperation = dryRunOperation;
        return this;
    }
    public Object internalServerError;
    public CreateHomeRegionControlResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidInputException;
    public CreateHomeRegionControlResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object serviceUnavailableException;
    public CreateHomeRegionControlResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public CreateHomeRegionControlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateHomeRegionControlResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}