package openapisdk.models.operations;



public class SearchSystemTemplatesResponse {
    public String contentType;
    public SearchSystemTemplatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public SearchSystemTemplatesResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public SearchSystemTemplatesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.SearchSystemTemplatesResponse searchSystemTemplatesResponse;
    public SearchSystemTemplatesResponse withSearchSystemTemplatesResponse(openapisdk.models.shared.SearchSystemTemplatesResponse searchSystemTemplatesResponse) {
        this.searchSystemTemplatesResponse = searchSystemTemplatesResponse;
        return this;
    }
    public Long statusCode;
    public SearchSystemTemplatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public SearchSystemTemplatesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}