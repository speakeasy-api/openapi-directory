package openapisdk.models.operations;



public class ListDataIngestionJobsResponse {
    public Object accessDeniedException;
    public ListDataIngestionJobsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListDataIngestionJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListDataIngestionJobsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListDataIngestionJobsResponse listDataIngestionJobsResponse;
    public ListDataIngestionJobsResponse withListDataIngestionJobsResponse(openapisdk.models.shared.ListDataIngestionJobsResponse listDataIngestionJobsResponse) {
        this.listDataIngestionJobsResponse = listDataIngestionJobsResponse;
        return this;
    }
    public Long statusCode;
    public ListDataIngestionJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListDataIngestionJobsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListDataIngestionJobsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}