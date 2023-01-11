package openapisdk.models.operations;



public class BatchGetFrameMetricDataResponse {
    public openapisdk.models.shared.BatchGetFrameMetricDataResponse batchGetFrameMetricDataResponse;
    public BatchGetFrameMetricDataResponse withBatchGetFrameMetricDataResponse(openapisdk.models.shared.BatchGetFrameMetricDataResponse batchGetFrameMetricDataResponse) {
        this.batchGetFrameMetricDataResponse = batchGetFrameMetricDataResponse;
        return this;
    }
    public String contentType;
    public BatchGetFrameMetricDataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public BatchGetFrameMetricDataResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public BatchGetFrameMetricDataResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public BatchGetFrameMetricDataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public BatchGetFrameMetricDataResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public BatchGetFrameMetricDataResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}