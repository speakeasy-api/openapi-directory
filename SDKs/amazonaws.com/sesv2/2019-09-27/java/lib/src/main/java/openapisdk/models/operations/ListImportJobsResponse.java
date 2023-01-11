package openapisdk.models.operations;



public class ListImportJobsResponse {
    public Object badRequestException;
    public ListImportJobsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListImportJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListImportJobsResponse listImportJobsResponse;
    public ListImportJobsResponse withListImportJobsResponse(openapisdk.models.shared.ListImportJobsResponse listImportJobsResponse) {
        this.listImportJobsResponse = listImportJobsResponse;
        return this;
    }
    public Long statusCode;
    public ListImportJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListImportJobsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}