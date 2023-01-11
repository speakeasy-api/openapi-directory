package openapisdk.models.operations;



public class StartMedicalTranscriptionJobResponse {
    public Object badRequestException;
    public StartMedicalTranscriptionJobResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public StartMedicalTranscriptionJobResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public StartMedicalTranscriptionJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public StartMedicalTranscriptionJobResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public StartMedicalTranscriptionJobResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.StartMedicalTranscriptionJobResponse startMedicalTranscriptionJobResponse;
    public StartMedicalTranscriptionJobResponse withStartMedicalTranscriptionJobResponse(openapisdk.models.shared.StartMedicalTranscriptionJobResponse startMedicalTranscriptionJobResponse) {
        this.startMedicalTranscriptionJobResponse = startMedicalTranscriptionJobResponse;
        return this;
    }
    public Long statusCode;
    public StartMedicalTranscriptionJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}