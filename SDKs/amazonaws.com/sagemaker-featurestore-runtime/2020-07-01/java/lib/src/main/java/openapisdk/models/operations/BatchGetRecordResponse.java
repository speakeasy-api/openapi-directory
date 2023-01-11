package openapisdk.models.operations;



public class BatchGetRecordResponse {
    public Object accessForbidden;
    public BatchGetRecordResponse withAccessForbidden(Object accessForbidden) {
        this.accessForbidden = accessForbidden;
        return this;
    }
    public openapisdk.models.shared.BatchGetRecordResponse batchGetRecordResponse;
    public BatchGetRecordResponse withBatchGetRecordResponse(openapisdk.models.shared.BatchGetRecordResponse batchGetRecordResponse) {
        this.batchGetRecordResponse = batchGetRecordResponse;
        return this;
    }
    public String contentType;
    public BatchGetRecordResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailure;
    public BatchGetRecordResponse withInternalFailure(Object internalFailure) {
        this.internalFailure = internalFailure;
        return this;
    }
    public Object serviceUnavailable;
    public BatchGetRecordResponse withServiceUnavailable(Object serviceUnavailable) {
        this.serviceUnavailable = serviceUnavailable;
        return this;
    }
    public Long statusCode;
    public BatchGetRecordResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationError;
    public BatchGetRecordResponse withValidationError(Object validationError) {
        this.validationError = validationError;
        return this;
    }
}