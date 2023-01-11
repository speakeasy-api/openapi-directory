package openapisdk.models.operations;



public class DescribeAlarmModelResponse {
    public String contentType;
    public DescribeAlarmModelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAlarmModelResponse describeAlarmModelResponse;
    public DescribeAlarmModelResponse withDescribeAlarmModelResponse(openapisdk.models.shared.DescribeAlarmModelResponse describeAlarmModelResponse) {
        this.describeAlarmModelResponse = describeAlarmModelResponse;
        return this;
    }
    public Object internalFailureException;
    public DescribeAlarmModelResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeAlarmModelResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeAlarmModelResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DescribeAlarmModelResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DescribeAlarmModelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeAlarmModelResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}