package openapisdk.models.operations;



public class ListJobsResponse {
    public String contentType;
    public ListJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidNextTokenException;
    public ListJobsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListJobsResult listJobsResult;
    public ListJobsResponse withListJobsResult(openapisdk.models.shared.ListJobsResult listJobsResult) {
        this.listJobsResult = listJobsResult;
        return this;
    }
    public Long statusCode;
    public ListJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}