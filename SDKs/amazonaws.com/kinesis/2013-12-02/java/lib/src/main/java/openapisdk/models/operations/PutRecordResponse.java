package openapisdk.models.operations;



public class PutRecordResponse {
    public String contentType;
    public PutRecordResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArgumentException;
    public PutRecordResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object kmsAccessDeniedException;
    public PutRecordResponse withKmsAccessDeniedException(Object kmsAccessDeniedException) {
        this.kmsAccessDeniedException = kmsAccessDeniedException;
        return this;
    }
    public Object kmsDisabledException;
    public PutRecordResponse withKmsDisabledException(Object kmsDisabledException) {
        this.kmsDisabledException = kmsDisabledException;
        return this;
    }
    public Object kmsInvalidStateException;
    public PutRecordResponse withKmsInvalidStateException(Object kmsInvalidStateException) {
        this.kmsInvalidStateException = kmsInvalidStateException;
        return this;
    }
    public Object kmsNotFoundException;
    public PutRecordResponse withKmsNotFoundException(Object kmsNotFoundException) {
        this.kmsNotFoundException = kmsNotFoundException;
        return this;
    }
    public Object kmsOptInRequired;
    public PutRecordResponse withKmsOptInRequired(Object kmsOptInRequired) {
        this.kmsOptInRequired = kmsOptInRequired;
        return this;
    }
    public Object kmsThrottlingException;
    public PutRecordResponse withKmsThrottlingException(Object kmsThrottlingException) {
        this.kmsThrottlingException = kmsThrottlingException;
        return this;
    }
    public Object provisionedThroughputExceededException;
    public PutRecordResponse withProvisionedThroughputExceededException(Object provisionedThroughputExceededException) {
        this.provisionedThroughputExceededException = provisionedThroughputExceededException;
        return this;
    }
    public openapisdk.models.shared.PutRecordOutput putRecordOutput;
    public PutRecordResponse withPutRecordOutput(openapisdk.models.shared.PutRecordOutput putRecordOutput) {
        this.putRecordOutput = putRecordOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public PutRecordResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public PutRecordResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}