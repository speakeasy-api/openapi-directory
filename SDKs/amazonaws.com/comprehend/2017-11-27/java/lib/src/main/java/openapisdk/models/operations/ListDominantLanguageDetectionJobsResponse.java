package openapisdk.models.operations;



public class ListDominantLanguageDetectionJobsResponse {
    public String contentType;
    public ListDominantLanguageDetectionJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListDominantLanguageDetectionJobsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidFilterException;
    public ListDominantLanguageDetectionJobsResponse withInvalidFilterException(Object invalidFilterException) {
        this.invalidFilterException = invalidFilterException;
        return this;
    }
    public Object invalidRequestException;
    public ListDominantLanguageDetectionJobsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListDominantLanguageDetectionJobsResponse listDominantLanguageDetectionJobsResponse;
    public ListDominantLanguageDetectionJobsResponse withListDominantLanguageDetectionJobsResponse(openapisdk.models.shared.ListDominantLanguageDetectionJobsResponse listDominantLanguageDetectionJobsResponse) {
        this.listDominantLanguageDetectionJobsResponse = listDominantLanguageDetectionJobsResponse;
        return this;
    }
    public Long statusCode;
    public ListDominantLanguageDetectionJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListDominantLanguageDetectionJobsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}