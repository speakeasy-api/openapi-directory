package openapisdk.models.operations;



public class GetWorldTemplateBodyResponse {
    public String contentType;
    public GetWorldTemplateBodyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetWorldTemplateBodyResponse getWorldTemplateBodyResponse;
    public GetWorldTemplateBodyResponse withGetWorldTemplateBodyResponse(openapisdk.models.shared.GetWorldTemplateBodyResponse getWorldTemplateBodyResponse) {
        this.getWorldTemplateBodyResponse = getWorldTemplateBodyResponse;
        return this;
    }
    public Object internalServerException;
    public GetWorldTemplateBodyResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public GetWorldTemplateBodyResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetWorldTemplateBodyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetWorldTemplateBodyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetWorldTemplateBodyResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}