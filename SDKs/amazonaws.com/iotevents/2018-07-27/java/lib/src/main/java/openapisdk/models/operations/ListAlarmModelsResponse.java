package openapisdk.models.operations;



public class ListAlarmModelsResponse {
    public String contentType;
    public ListAlarmModelsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListAlarmModelsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListAlarmModelsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListAlarmModelsResponse listAlarmModelsResponse;
    public ListAlarmModelsResponse withListAlarmModelsResponse(openapisdk.models.shared.ListAlarmModelsResponse listAlarmModelsResponse) {
        this.listAlarmModelsResponse = listAlarmModelsResponse;
        return this;
    }
    public Object serviceUnavailableException;
    public ListAlarmModelsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListAlarmModelsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListAlarmModelsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}