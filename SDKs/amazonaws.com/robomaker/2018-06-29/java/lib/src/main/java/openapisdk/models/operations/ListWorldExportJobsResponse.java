package openapisdk.models.operations;



public class ListWorldExportJobsResponse {
    public String contentType;
    public ListWorldExportJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListWorldExportJobsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public ListWorldExportJobsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListWorldExportJobsResponse listWorldExportJobsResponse;
    public ListWorldExportJobsResponse withListWorldExportJobsResponse(openapisdk.models.shared.ListWorldExportJobsResponse listWorldExportJobsResponse) {
        this.listWorldExportJobsResponse = listWorldExportJobsResponse;
        return this;
    }
    public Long statusCode;
    public ListWorldExportJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListWorldExportJobsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}