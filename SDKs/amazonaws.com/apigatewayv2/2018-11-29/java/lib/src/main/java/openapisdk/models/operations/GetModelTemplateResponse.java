package openapisdk.models.operations;



public class GetModelTemplateResponse {
    public String contentType;
    public GetModelTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetModelTemplateResponse getModelTemplateResponse;
    public GetModelTemplateResponse withGetModelTemplateResponse(openapisdk.models.shared.GetModelTemplateResponse getModelTemplateResponse) {
        this.getModelTemplateResponse = getModelTemplateResponse;
        return this;
    }
    public Object notFoundException;
    public GetModelTemplateResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetModelTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetModelTemplateResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}