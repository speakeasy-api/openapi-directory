package openapisdk.models.operations;



public class SearchFlowTemplatesResponse {
    public String contentType;
    public SearchFlowTemplatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public SearchFlowTemplatesResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public SearchFlowTemplatesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.SearchFlowTemplatesResponse searchFlowTemplatesResponse;
    public SearchFlowTemplatesResponse withSearchFlowTemplatesResponse(openapisdk.models.shared.SearchFlowTemplatesResponse searchFlowTemplatesResponse) {
        this.searchFlowTemplatesResponse = searchFlowTemplatesResponse;
        return this;
    }
    public Long statusCode;
    public SearchFlowTemplatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public SearchFlowTemplatesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}