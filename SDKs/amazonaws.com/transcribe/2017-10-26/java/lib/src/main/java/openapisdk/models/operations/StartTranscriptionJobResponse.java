package openapisdk.models.operations;



public class StartTranscriptionJobResponse {
    public Object badRequestException;
    public StartTranscriptionJobResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public StartTranscriptionJobResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public StartTranscriptionJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public StartTranscriptionJobResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public StartTranscriptionJobResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.StartTranscriptionJobResponse startTranscriptionJobResponse;
    public StartTranscriptionJobResponse withStartTranscriptionJobResponse(openapisdk.models.shared.StartTranscriptionJobResponse startTranscriptionJobResponse) {
        this.startTranscriptionJobResponse = startTranscriptionJobResponse;
        return this;
    }
    public Long statusCode;
    public StartTranscriptionJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}