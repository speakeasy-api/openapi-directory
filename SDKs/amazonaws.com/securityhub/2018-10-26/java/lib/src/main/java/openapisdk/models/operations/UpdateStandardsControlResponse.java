package openapisdk.models.operations;



public class UpdateStandardsControlResponse {
    public String contentType;
    public UpdateStandardsControlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public UpdateStandardsControlResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidAccessException;
    public UpdateStandardsControlResponse withInvalidAccessException(Object invalidAccessException) {
        this.invalidAccessException = invalidAccessException;
        return this;
    }
    public Object invalidInputException;
    public UpdateStandardsControlResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateStandardsControlResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateStandardsControlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateStandardsControlResponse;
    public UpdateStandardsControlResponse withUpdateStandardsControlResponse(java.util.Map<String, Object> updateStandardsControlResponse) {
        this.updateStandardsControlResponse = updateStandardsControlResponse;
        return this;
    }
}