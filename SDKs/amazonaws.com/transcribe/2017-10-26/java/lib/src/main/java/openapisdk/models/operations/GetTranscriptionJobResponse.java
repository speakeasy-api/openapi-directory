package openapisdk.models.operations;



public class GetTranscriptionJobResponse {
    public Object badRequestException;
    public GetTranscriptionJobResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetTranscriptionJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetTranscriptionJobResponse getTranscriptionJobResponse;
    public GetTranscriptionJobResponse withGetTranscriptionJobResponse(openapisdk.models.shared.GetTranscriptionJobResponse getTranscriptionJobResponse) {
        this.getTranscriptionJobResponse = getTranscriptionJobResponse;
        return this;
    }
    public Object internalFailureException;
    public GetTranscriptionJobResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public GetTranscriptionJobResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public GetTranscriptionJobResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetTranscriptionJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}