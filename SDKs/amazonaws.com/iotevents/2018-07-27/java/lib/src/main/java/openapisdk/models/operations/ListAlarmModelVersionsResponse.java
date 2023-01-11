package openapisdk.models.operations;



public class ListAlarmModelVersionsResponse {
    public String contentType;
    public ListAlarmModelVersionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListAlarmModelVersionsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListAlarmModelVersionsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListAlarmModelVersionsResponse listAlarmModelVersionsResponse;
    public ListAlarmModelVersionsResponse withListAlarmModelVersionsResponse(openapisdk.models.shared.ListAlarmModelVersionsResponse listAlarmModelVersionsResponse) {
        this.listAlarmModelVersionsResponse = listAlarmModelVersionsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListAlarmModelVersionsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListAlarmModelVersionsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListAlarmModelVersionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListAlarmModelVersionsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}