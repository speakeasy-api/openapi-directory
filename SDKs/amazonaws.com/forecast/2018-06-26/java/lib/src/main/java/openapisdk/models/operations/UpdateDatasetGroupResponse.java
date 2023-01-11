package openapisdk.models.operations;



public class UpdateDatasetGroupResponse {
    public String contentType;
    public UpdateDatasetGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public UpdateDatasetGroupResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceInUseException;
    public UpdateDatasetGroupResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateDatasetGroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateDatasetGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateDatasetGroupResponse;
    public UpdateDatasetGroupResponse withUpdateDatasetGroupResponse(java.util.Map<String, Object> updateDatasetGroupResponse) {
        this.updateDatasetGroupResponse = updateDatasetGroupResponse;
        return this;
    }
}