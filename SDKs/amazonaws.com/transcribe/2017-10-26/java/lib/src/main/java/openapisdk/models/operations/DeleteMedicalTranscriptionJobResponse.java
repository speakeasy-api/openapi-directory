package openapisdk.models.operations;



public class DeleteMedicalTranscriptionJobResponse {
    public Object badRequestException;
    public DeleteMedicalTranscriptionJobResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DeleteMedicalTranscriptionJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public DeleteMedicalTranscriptionJobResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public DeleteMedicalTranscriptionJobResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public DeleteMedicalTranscriptionJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}