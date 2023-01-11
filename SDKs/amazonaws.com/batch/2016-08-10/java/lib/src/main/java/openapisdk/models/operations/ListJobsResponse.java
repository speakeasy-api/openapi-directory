package openapisdk.models.operations;



public class ListJobsResponse {
    public Object clientException;
    public ListJobsResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public ListJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListJobsResponse listJobsResponse;
    public ListJobsResponse withListJobsResponse(openapisdk.models.shared.ListJobsResponse listJobsResponse) {
        this.listJobsResponse = listJobsResponse;
        return this;
    }
    public Object serverException;
    public ListJobsResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public ListJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}