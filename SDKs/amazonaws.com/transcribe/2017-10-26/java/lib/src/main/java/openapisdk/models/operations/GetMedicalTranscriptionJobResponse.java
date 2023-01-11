package openapisdk.models.operations;



public class GetMedicalTranscriptionJobResponse {
    public Object badRequestException;
    public GetMedicalTranscriptionJobResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetMedicalTranscriptionJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetMedicalTranscriptionJobResponse getMedicalTranscriptionJobResponse;
    public GetMedicalTranscriptionJobResponse withGetMedicalTranscriptionJobResponse(openapisdk.models.shared.GetMedicalTranscriptionJobResponse getMedicalTranscriptionJobResponse) {
        this.getMedicalTranscriptionJobResponse = getMedicalTranscriptionJobResponse;
        return this;
    }
    public Object internalFailureException;
    public GetMedicalTranscriptionJobResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public GetMedicalTranscriptionJobResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public GetMedicalTranscriptionJobResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetMedicalTranscriptionJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}