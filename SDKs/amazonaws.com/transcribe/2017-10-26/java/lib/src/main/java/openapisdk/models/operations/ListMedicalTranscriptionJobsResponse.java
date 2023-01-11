package openapisdk.models.operations;



public class ListMedicalTranscriptionJobsResponse {
    public Object badRequestException;
    public ListMedicalTranscriptionJobsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListMedicalTranscriptionJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListMedicalTranscriptionJobsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public ListMedicalTranscriptionJobsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListMedicalTranscriptionJobsResponse listMedicalTranscriptionJobsResponse;
    public ListMedicalTranscriptionJobsResponse withListMedicalTranscriptionJobsResponse(openapisdk.models.shared.ListMedicalTranscriptionJobsResponse listMedicalTranscriptionJobsResponse) {
        this.listMedicalTranscriptionJobsResponse = listMedicalTranscriptionJobsResponse;
        return this;
    }
    public Long statusCode;
    public ListMedicalTranscriptionJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}