package openapisdk.models.operations;



public class GetRecordsResponse {
    public String contentType;
    public GetRecordsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object expiredIteratorException;
    public GetRecordsResponse withExpiredIteratorException(Object expiredIteratorException) {
        this.expiredIteratorException = expiredIteratorException;
        return this;
    }
    public openapisdk.models.shared.GetRecordsOutput getRecordsOutput;
    public GetRecordsResponse withGetRecordsOutput(openapisdk.models.shared.GetRecordsOutput getRecordsOutput) {
        this.getRecordsOutput = getRecordsOutput;
        return this;
    }
    public Object invalidArgumentException;
    public GetRecordsResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object kmsAccessDeniedException;
    public GetRecordsResponse withKmsAccessDeniedException(Object kmsAccessDeniedException) {
        this.kmsAccessDeniedException = kmsAccessDeniedException;
        return this;
    }
    public Object kmsDisabledException;
    public GetRecordsResponse withKmsDisabledException(Object kmsDisabledException) {
        this.kmsDisabledException = kmsDisabledException;
        return this;
    }
    public Object kmsInvalidStateException;
    public GetRecordsResponse withKmsInvalidStateException(Object kmsInvalidStateException) {
        this.kmsInvalidStateException = kmsInvalidStateException;
        return this;
    }
    public Object kmsNotFoundException;
    public GetRecordsResponse withKmsNotFoundException(Object kmsNotFoundException) {
        this.kmsNotFoundException = kmsNotFoundException;
        return this;
    }
    public Object kmsOptInRequired;
    public GetRecordsResponse withKmsOptInRequired(Object kmsOptInRequired) {
        this.kmsOptInRequired = kmsOptInRequired;
        return this;
    }
    public Object kmsThrottlingException;
    public GetRecordsResponse withKmsThrottlingException(Object kmsThrottlingException) {
        this.kmsThrottlingException = kmsThrottlingException;
        return this;
    }
    public Object provisionedThroughputExceededException;
    public GetRecordsResponse withProvisionedThroughputExceededException(Object provisionedThroughputExceededException) {
        this.provisionedThroughputExceededException = provisionedThroughputExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetRecordsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetRecordsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}