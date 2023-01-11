package openapisdk.models.operations;



public class DeleteAlarmModelResponse {
    public String contentType;
    public DeleteAlarmModelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteAlarmModelResponse;
    public DeleteAlarmModelResponse withDeleteAlarmModelResponse(java.util.Map<String, Object> deleteAlarmModelResponse) {
        this.deleteAlarmModelResponse = deleteAlarmModelResponse;
        return this;
    }
    public Object internalFailureException;
    public DeleteAlarmModelResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteAlarmModelResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceInUseException;
    public DeleteAlarmModelResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteAlarmModelResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DeleteAlarmModelResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DeleteAlarmModelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteAlarmModelResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}