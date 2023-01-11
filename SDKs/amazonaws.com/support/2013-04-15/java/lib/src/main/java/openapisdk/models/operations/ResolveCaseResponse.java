package openapisdk.models.operations;



public class ResolveCaseResponse {
    public Object caseIdNotFound;
    public ResolveCaseResponse withCaseIdNotFound(Object caseIdNotFound) {
        this.caseIdNotFound = caseIdNotFound;
        return this;
    }
    public String contentType;
    public ResolveCaseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerError;
    public ResolveCaseResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public openapisdk.models.shared.ResolveCaseResponse resolveCaseResponse;
    public ResolveCaseResponse withResolveCaseResponse(openapisdk.models.shared.ResolveCaseResponse resolveCaseResponse) {
        this.resolveCaseResponse = resolveCaseResponse;
        return this;
    }
    public Long statusCode;
    public ResolveCaseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}