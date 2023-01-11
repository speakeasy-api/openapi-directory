package openapisdk.models.operations;



public class ListJobTemplatesResponse {
    public String contentType;
    public ListJobTemplatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListJobTemplatesResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListJobTemplatesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListJobTemplatesResponse listJobTemplatesResponse;
    public ListJobTemplatesResponse withListJobTemplatesResponse(openapisdk.models.shared.ListJobTemplatesResponse listJobTemplatesResponse) {
        this.listJobTemplatesResponse = listJobTemplatesResponse;
        return this;
    }
    public Long statusCode;
    public ListJobTemplatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListJobTemplatesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}