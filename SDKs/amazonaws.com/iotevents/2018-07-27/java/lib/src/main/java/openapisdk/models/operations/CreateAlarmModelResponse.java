package openapisdk.models.operations;



public class CreateAlarmModelResponse {
    public String contentType;
    public CreateAlarmModelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateAlarmModelResponse createAlarmModelResponse;
    public CreateAlarmModelResponse withCreateAlarmModelResponse(openapisdk.models.shared.CreateAlarmModelResponse createAlarmModelResponse) {
        this.createAlarmModelResponse = createAlarmModelResponse;
        return this;
    }
    public Object internalFailureException;
    public CreateAlarmModelResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public CreateAlarmModelResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public CreateAlarmModelResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateAlarmModelResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object resourceInUseException;
    public CreateAlarmModelResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object serviceUnavailableException;
    public CreateAlarmModelResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public CreateAlarmModelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateAlarmModelResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}