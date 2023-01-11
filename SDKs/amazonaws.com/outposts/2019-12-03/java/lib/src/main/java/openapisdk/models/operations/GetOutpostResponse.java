package openapisdk.models.operations;



public class GetOutpostResponse {
    public Object accessDeniedException;
    public GetOutpostResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetOutpostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetOutpostOutput getOutpostOutput;
    public GetOutpostResponse withGetOutpostOutput(openapisdk.models.shared.GetOutpostOutput getOutpostOutput) {
        this.getOutpostOutput = getOutpostOutput;
        return this;
    }
    public Object internalServerException;
    public GetOutpostResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object notFoundException;
    public GetOutpostResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetOutpostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetOutpostResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}