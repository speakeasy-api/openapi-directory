package openapisdk.models.operations;



public class GetBehaviorModelTrainingSummariesResponse {
    public String contentType;
    public GetBehaviorModelTrainingSummariesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetBehaviorModelTrainingSummariesResponse getBehaviorModelTrainingSummariesResponse;
    public GetBehaviorModelTrainingSummariesResponse withGetBehaviorModelTrainingSummariesResponse(openapisdk.models.shared.GetBehaviorModelTrainingSummariesResponse getBehaviorModelTrainingSummariesResponse) {
        this.getBehaviorModelTrainingSummariesResponse = getBehaviorModelTrainingSummariesResponse;
        return this;
    }
    public Object internalFailureException;
    public GetBehaviorModelTrainingSummariesResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public GetBehaviorModelTrainingSummariesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetBehaviorModelTrainingSummariesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetBehaviorModelTrainingSummariesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetBehaviorModelTrainingSummariesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}