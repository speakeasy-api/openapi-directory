package openapisdk.models.operations;



public class PutRecordsResponse {
    public String contentType;
    public PutRecordsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArgumentException;
    public PutRecordsResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object kmsAccessDeniedException;
    public PutRecordsResponse withKmsAccessDeniedException(Object kmsAccessDeniedException) {
        this.kmsAccessDeniedException = kmsAccessDeniedException;
        return this;
    }
    public Object kmsDisabledException;
    public PutRecordsResponse withKmsDisabledException(Object kmsDisabledException) {
        this.kmsDisabledException = kmsDisabledException;
        return this;
    }
    public Object kmsInvalidStateException;
    public PutRecordsResponse withKmsInvalidStateException(Object kmsInvalidStateException) {
        this.kmsInvalidStateException = kmsInvalidStateException;
        return this;
    }
    public Object kmsNotFoundException;
    public PutRecordsResponse withKmsNotFoundException(Object kmsNotFoundException) {
        this.kmsNotFoundException = kmsNotFoundException;
        return this;
    }
    public Object kmsOptInRequired;
    public PutRecordsResponse withKmsOptInRequired(Object kmsOptInRequired) {
        this.kmsOptInRequired = kmsOptInRequired;
        return this;
    }
    public Object kmsThrottlingException;
    public PutRecordsResponse withKmsThrottlingException(Object kmsThrottlingException) {
        this.kmsThrottlingException = kmsThrottlingException;
        return this;
    }
    public Object provisionedThroughputExceededException;
    public PutRecordsResponse withProvisionedThroughputExceededException(Object provisionedThroughputExceededException) {
        this.provisionedThroughputExceededException = provisionedThroughputExceededException;
        return this;
    }
    public openapisdk.models.shared.PutRecordsOutput putRecordsOutput;
    public PutRecordsResponse withPutRecordsOutput(openapisdk.models.shared.PutRecordsOutput putRecordsOutput) {
        this.putRecordsOutput = putRecordsOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public PutRecordsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public PutRecordsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}