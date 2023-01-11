package openapisdk.models.operations;



public class ImportComponentResponse {
    public Object callRateLimitExceededException;
    public ImportComponentResponse withCallRateLimitExceededException(Object callRateLimitExceededException) {
        this.callRateLimitExceededException = callRateLimitExceededException;
        return this;
    }
    public Object clientException;
    public ImportComponentResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public ImportComponentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public ImportComponentResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object idempotentParameterMismatchException;
    public ImportComponentResponse withIdempotentParameterMismatchException(Object idempotentParameterMismatchException) {
        this.idempotentParameterMismatchException = idempotentParameterMismatchException;
        return this;
    }
    public openapisdk.models.shared.ImportComponentResponse importComponentResponse;
    public ImportComponentResponse withImportComponentResponse(openapisdk.models.shared.ImportComponentResponse importComponentResponse) {
        this.importComponentResponse = importComponentResponse;
        return this;
    }
    public Object invalidParameterCombinationException;
    public ImportComponentResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Object invalidRequestException;
    public ImportComponentResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object invalidVersionNumberException;
    public ImportComponentResponse withInvalidVersionNumberException(Object invalidVersionNumberException) {
        this.invalidVersionNumberException = invalidVersionNumberException;
        return this;
    }
    public Object resourceInUseException;
    public ImportComponentResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object serviceException;
    public ImportComponentResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Object serviceUnavailableException;
    public ImportComponentResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ImportComponentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}