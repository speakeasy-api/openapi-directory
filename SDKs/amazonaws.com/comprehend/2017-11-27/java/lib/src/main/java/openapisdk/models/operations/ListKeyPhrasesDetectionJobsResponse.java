package openapisdk.models.operations;



public class ListKeyPhrasesDetectionJobsResponse {
    public String contentType;
    public ListKeyPhrasesDetectionJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListKeyPhrasesDetectionJobsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidFilterException;
    public ListKeyPhrasesDetectionJobsResponse withInvalidFilterException(Object invalidFilterException) {
        this.invalidFilterException = invalidFilterException;
        return this;
    }
    public Object invalidRequestException;
    public ListKeyPhrasesDetectionJobsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListKeyPhrasesDetectionJobsResponse listKeyPhrasesDetectionJobsResponse;
    public ListKeyPhrasesDetectionJobsResponse withListKeyPhrasesDetectionJobsResponse(openapisdk.models.shared.ListKeyPhrasesDetectionJobsResponse listKeyPhrasesDetectionJobsResponse) {
        this.listKeyPhrasesDetectionJobsResponse = listKeyPhrasesDetectionJobsResponse;
        return this;
    }
    public Long statusCode;
    public ListKeyPhrasesDetectionJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListKeyPhrasesDetectionJobsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}