package openapisdk.models.operations;



public class ListTranscriptionJobsResponse {
    public Object badRequestException;
    public ListTranscriptionJobsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListTranscriptionJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListTranscriptionJobsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public ListTranscriptionJobsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListTranscriptionJobsResponse listTranscriptionJobsResponse;
    public ListTranscriptionJobsResponse withListTranscriptionJobsResponse(openapisdk.models.shared.ListTranscriptionJobsResponse listTranscriptionJobsResponse) {
        this.listTranscriptionJobsResponse = listTranscriptionJobsResponse;
        return this;
    }
    public Long statusCode;
    public ListTranscriptionJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}