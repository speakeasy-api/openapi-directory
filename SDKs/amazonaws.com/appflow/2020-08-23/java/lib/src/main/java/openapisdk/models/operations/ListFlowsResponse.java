package openapisdk.models.operations;



public class ListFlowsResponse {
    public String contentType;
    public ListFlowsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListFlowsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListFlowsResponse listFlowsResponse;
    public ListFlowsResponse withListFlowsResponse(openapisdk.models.shared.ListFlowsResponse listFlowsResponse) {
        this.listFlowsResponse = listFlowsResponse;
        return this;
    }
    public Long statusCode;
    public ListFlowsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListFlowsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}